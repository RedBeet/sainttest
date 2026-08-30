const fs = require('fs');
let code = `"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTest } from "../context/context";
import { questions } from "../data";
import styles from "./page.module.css";
import { LanguageToggle } from "../components";

function TestHeader({ page, total, router, language }) {
  return (
    <div className={styles.testHeader}>
      <div onClick={() => router.back()} className={styles.goBack} style={{cursor: "pointer"}}>
        {language === 'ko' ? "뒤로가기" : "Back"}
      </div>
      <div className={styles.pageNumber}>
        <span>
          {page}/{total}
        </span>
      </div>
    </div>
  );
}

function Answers({ contents, scale, handleAnswer }) {
  return (
    <div className={styles.buttonSet}>
      {contents.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => handleAnswer(scale, item.weight)}
            className={styles.button}
          >
            {item.answer}
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Test() {
  const { traits, setTraits, language } = useTest();
  const [idx, setIdx] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("Updated traits:", traits);
  }, [traits]);

  const handleAnswer = (scale, weight) => {
    if (idx === 0) {
      setTraits({ C_R: 0, S_F: 0, V_D: 0, I_E: 0 });
    }
    setTraits((prev) => {
      console.log("Previous traits:", prev);
      const updatedTraits = { ...prev, [scale]: prev[scale] + weight };
      console.log("New traits:", updatedTraits);
      return updatedTraits;
    });

    if (idx < questions[language].length - 1) {
      setIdx(idx + 1);
    } else {
      router.push("/result");
    }
  };

  const { scale, question, answers } = questions[language][idx];

  return (
    <div className={styles.page}>
      <LanguageToggle />
      <TestHeader page={idx + 1} total={questions[language].length} router={router} language={language} />
      <div className={styles.question}>{question}</div>
      <Answers contents={answers} scale={scale} handleAnswer={handleAnswer} />
    </div>
  );
}
`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\ontest\\page.js', code, 'utf8');
