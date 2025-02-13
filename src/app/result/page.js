"use client";
import { useRef, useState, useMemo } from "react";
import { GotoHome } from "../components";
import { useTest } from "../context/context";
import { saints } from "../data";
import styles from './page.module.css';

function getResult (traits) {
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

  return { result: saints[res[0]][res[1]][res[2]][res[3]], resTrait: res.join("") };
}

export default function ResultPage() {
    const { userName, traits } = useTest();
    const { result, resTrait } = useMemo(() => getResult(traits), [traits]);

    const canvasRef = useRef(null);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [isCanvasVisible, setIsCanvasVisible] = useState(false);
    
    const generateImage = (newName) => {
        setIsCanvasVisible(false);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        const loadFont = async () => {
            const font = new FontFace("Pretendard-Medium", "url(https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff)");
            await font.load();
            document.fonts.add(font);
        }
        
        img.src = "/img/share/"+resTrait+".png";
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img, 0, 0, img.width, img.height);
            
            ctx.font = "64px 'Pretendard-Medium'";
            ctx.fillStyle = "#1E1E1E";
            ctx.textAlign = "center";
            ctx.fillText(newName + "님과 닮은 위인은", img.width / 2, 200);
            
            const newImage = canvas.toDataURL("image/png");
            setUpdatedImage(newImage);
            shareToInstagram()
        };
    };

    const shareToInstagram = () => {
        if (!updatedImage) return;
        const blob = dataURLtoBlob(updatedImage);
        const file = new File([blob], "shared-image.png", { type: "image/png" });

        const formData = new FormData();
        formData.append("file", file);
        
        const instagramIntent = `intent://story_camera#Intent;package=com.instagram.android;scheme=https;end;`;
        window.location.href = instagramIntent;
    };

    const dataURLtoBlob = (dataURL) => {
        const byteString = atob(dataURL.split(",")[1]);
        const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i);
        }
        return new Blob([uint8Array], { type: mimeString });
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <GotoHome />
            </div>
            <div className={styles.title}>
                <div className={styles.userName}>{userName}님과 닮은 위인은</div>
                <div className={styles.saintName}>{result.name}</div>
            </div>
            <img src={result.imageSrc} className={styles.saintImg}/>
            <div className={styles.summary}>{result.summary}</div>
            <div className={styles.description}>{result.description}</div>
            <div className={styles.buttonSet}>
                <canvas 
                    ref={canvasRef} 
                    // className={isCanvasVisible ? "" : "hidden"} //debug
                    style={{ display: isCanvasVisible ? "block" : "none" }}
                />
                <button onClick={() => generateImage(userName)} className={styles.button}> <img src="/instagram.svg" className={styles.instagramIcon} />  인스타그램으로 공유하기 </button>
            </div>
        </div>
    );
}
