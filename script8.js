const fs = require('fs');
let code = `"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GotoHome, LanguageToggle } from "../components";
import { useTest } from "../context/context";
import { caution } from "../data";
import styles from "./page.module.css";

function Caution({ language }) {
  return (
    <div className={styles.cautions}>
      {caution[language].map((item, index) => (
        <div key={index} className={styles.caution}>
          <div>※</div>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}

export default function StartPoint() {
  const router = useRouter();

  const { userName, setUserName, language } = useTest();
  const [inputName, setInputName] = useState(userName || "");

  const texts = {
    ko: {
      title1: "나와 닮은 ",
      title2: "가톨릭 위인",
      title3: " 찾기",
      nameAlert: "당신의 이름을 입력해주세요",
      placeholder: "이름",
      startBtn: "시작하기",
      defaultName: "사용자"
    },
    en: {
      title1: "Find a ",
      title2: "Catholic saint",
      title3: " who resembles me",
      nameAlert: "Please enter your name",
      placeholder: "Name",
      startBtn: "Start",
      defaultName: "User"
    }
  };

  const t = texts[language];

  const handleSubmit = () => {
    setUserName(inputName || t.defaultName);
    router.push("/ontest");
  };

  return (
    <div className={styles.page}>
      <LanguageToggle />
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.title}>
        {t.title1}<span className={styles.blue}>{t.title2}</span>{t.title3}
      </div>
      <div className={styles.saintImage}>
        <img
          src="/img/SaintStartPoint.png"
          width="248"
          className={styles.image}
        />
        <div className={styles.whiteBlur}></div>
      </div>
      <div className={styles.nameAlert}>{t.nameAlert}</div>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder={t.placeholder}
        className={styles.inputBox}
      />
      <Caution language={language} />
      <div className={styles.buttonSet}>
        <button onClick={handleSubmit} className={styles.button}>
          {t.startBtn}
        </button>
      </div>
    </div>
  );
}
`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\saint\\page.js', code, 'utf8');
