"use client";
import styles from "./page.module.css";
import { sedtua } from '../data'
import { GotoHome } from '../components';
import { useRouter } from "next/navigation";

export default function SedTua() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <GotoHome />
      </div>
      <div className={styles.whatIsSedtua}>
        <div className={styles.WhatIsSedtuaLat}>
            <span>Quid est </span>
            <span>
              <span className={styles.sedtua}>SED-TUA</span>
              <span>?</span>
            </span>
        </div>
        <div className={styles.WhatIsSedtuaKr}>SED-TUA는 무엇인가요?</div>
      </div>
      <div className={styles.sedtuaDescription}>{sedtua}</div>
    </div>
  );
}