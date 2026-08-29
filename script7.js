const fs = require('fs');
let code = `"use client";
import { useRouter } from "next/navigation";
import Cross from "../../public/cross.svg";
import { ReactComponent as Logo } from "../../public/via_logo.svg";
import styles from "./page.module.css";
import globalStyle from "./globals.css";
import { useTest } from "./context/context";
import { LanguageToggle } from "./components";

function ClubTitle() {
  return (
    <div className={styles.mainTitle}>
      <img src="/sanarae_logo.png" className={styles.logo} />
    </div>
  );
}

function Home() {
  const router = useRouter();
  const { language } = useTest();

  const texts = {
    ko: {
      btn1: "나와 닮은 가톨릭 위인 찾기",
      btn2: "천주교 대전교구 청소년국 바로가기",
      btn3: "사나래 알아보기"
    },
    en: {
      btn1: "Find a Catholic saint who resembles me",
      btn2: "Go to Catholic Diocese of Daejeon Youth Dept.",
      btn3: "Learn about Sanarae"
    }
  };

  return (
    <div className={styles.page}>
      <LanguageToggle />
      <ClubTitle />
      <img src="/cross.svg" className={styles.cross} />
      <div className={styles.buttonSet}>
        <button className={styles.button} onClick={() => router.push("/saint")}>
          {texts[language].btn1}
        </button>
        <button
          className={\`\${styles.button} \${styles.csng}\`}
          onClick={() => router.push("http://agnus.or.kr/home/")}
        >
          {texts[language].btn2}
        </button>
        <button
          className={\`\${styles.button} \${styles.viabtn}\`}
          onClick={() => router.push("/sanarae")}
        >
          {texts[language].btn3}
        </button>
      </div>
    </div>
  );
}

export default Home;
`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\page.js', code, 'utf8');
