"use client";
import { useRef, useState, useMemo, useEffect } from "react";
import { GotoHome, LanguageToggle } from "../components";
import { useTest } from "../context/context";
import { saints } from "../data";
import styles from "./page.module.css";

function getResult(traits, language) {
  let { C_R: CR, S_F: SF, V_D: VD, I_E: IE } = traits;
  let res = [];

  if (CR === 0) CR = Math.random() - 0.5;
  if (SF === 0) SF = Math.random() - 0.5;
  if (VD === 0) VD = Math.random() - 0.5;
  if (IE === 0) IE = Math.random() - 0.5;

  res.push(CR > 0 ? "C" : "R");
  res.push(SF > 0 ? "S" : "F");
  res.push(VD > 0 ? "V" : "D");
  res.push(IE > 0 ? "I" : "E");

  return {
    result: saints[language][res[0]][res[1]][res[2]][res[3]],
    resTrait: res.join(""),
  };
}

export default function ResultPage() {
  const { userName, traits, language } = useTest();
  const { result, resTrait } = useMemo(
    () => getResult(traits, language),
    [traits, language],
  );

  const canvasRef = useRef(null);
  const shareImageRef = useRef(null);
  const fontPromiseRef = useRef(null);
  const [isCanvasVisible, setIsCanvasVisible] = useState(false);

  const texts = {
    ko: {
      resultTitle: "님과 닮은 위인은",
      shareBtn: "인스타그램으로 공유하기",
      shareTitle: "내 결과 공유",
      shareText: "나와 닮은 위인은?",
    },
    en: {
      resultTitle: "'s resembling saint is",
      shareBtn: "Share to Instagram",
      shareTitle: "Share my result",
      shareText: "Which saint resembles me?",
    },
  };

  const t = texts[language];

  useEffect(() => {
    const font = new FontFace(
      "Pretendard-Medium",
      "url(https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff)",
    );

    fontPromiseRef.current = font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    });
  }, []);

  useEffect(() => {
    const isKorean = language === "ko";
    const img = new Image();

    shareImageRef.current = null;

    img.src = `/img/share/${isKorean ? "ko" : "en"}/${resTrait}.png`;

    img.onload = () => {
      shareImageRef.current = img;
    };
  }, [language, resTrait]);

  const generateImage = async (newName) => {
    setIsCanvasVisible(false);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (fontPromiseRef.current) {
      await fontPromiseRef.current;
    }

    let img = shareImageRef.current;

    if (!img) {
      const isKorean = language === "ko";

      img = new Image();
      img.src = `/img/share/${isKorean ? "ko" : "en"}/${resTrait}.png`;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      shareImageRef.current = img;
    }

    const isKorean = language === "ko";

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0, img.width, img.height);

    // 언어별 폰트 크기
    ctx.font = `${isKorean ? 16 : 14}px 'Pretendard-Medium'`;
    ctx.fillStyle = "#1E1E1E";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    // 언어별 텍스트
    const shareStr = isKorean
      ? `${newName}님과 닮은 위인은`
      : `${newName}'s resembling saint is`;

    // Figma 기준 y 좌표
    const textY = isKorean ? 32 : 29;

    ctx.fillText(shareStr, img.width / 2, textY);

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      try {
        const file = new File([blob], "shared-image.png", {
          type: "image/png",
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: t.shareTitle,
            text: t.shareText,
            files: [file],
          });
          console.log("SUCCESS");
        } else {
          console.error("ERR: FILE SHARE NOT SUPPORTED");
        }
      } catch (error) {
        console.error("FAILED:", error);
      }
    }, "image/png");
  };

  return (
    <div className={styles.page}>
      <LanguageToggle />
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.title}>
        <div className={styles.userName}>
          {userName}
          {t.resultTitle}
        </div>
        <div className={styles.saintName}>{result.name}</div>
      </div>
      <img src={result.imageSrc} className={styles.saintImg} />
      <div className={styles.summary}>{result.summary}</div>
      <div className={styles.description}>{result.description}</div>
      <div className={styles.buttonSet}>
        <canvas
          ref={canvasRef}
          // className={isCanvasVisible ? "" : "hidden"} //debug
          style={{ display: isCanvasVisible ? "block" : "none" }}
        />
        <button
          onClick={() => generateImage(userName)}
          className={styles.button}
        >
          {" "}
          <img src="/instagram.svg" className={styles.instagramIcon} />{" "}
          {t.shareBtn}{" "}
        </button>
      </div>
    </div>
  );
}
