"use client";
import { useRouter } from "next/navigation";
import Cross from '../../public/cross.svg';
import {ReactComponent as Logo} from '../../public/via_logo.svg';
import styles from "./page.module.css";
import globalStyle from "./globals.css"
console.log(styles.sedtua)
function ClubTitle() {
  return (
    <div className={styles.mainTitle}>
      <img src="/via_logo.svg" className={styles.logo} />
    </div>
  )
}

function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <ClubTitle />
      <img src="/cross.svg" className={styles.cross} />
      <div className={styles.buttonSet}>
        <button className={styles.button} onClick={() => router.push('/saint')}>
          나와 닮은 가톨릭 위인 찾기
        </button>
        <button className={`${styles.button} ${styles.csng}`} onClick={() => router.push('http://agnus.or.kr/home/')}>
          천주교 대전교구 청소년국 바로가기
        </button>
        <button className={`${styles.button} ${styles.viabtn}`} onClick={() => router.push('/via')}>
          비아 알아보기
        </button>
      </div>
    </div>
  );
}

export default Home;