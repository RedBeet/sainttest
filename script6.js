const fs = require('fs');
let code = `"use client";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useTest } from "./context/context";

export function Button({content, href = '/'}) {
    return (
        <Link href={href}><button>{content}</button></Link>
    )
};

export function GotoHome() {
    const router = useRouter();
    const { language } = useTest();

    return (
        <div onClick={() => router.push('/')} style={{ cursor: "pointer" }}>
            {language === 'ko' ? '홈으로' : 'Home'}
        </div>
    );
}

export function GoBack() {
    const router = useRouter();
    const { language } = useTest();

    return (
        <div onClick={() => router.back()} style={{ cursor: "pointer" }} >
            {language === 'ko' ? '뒤로가기' : 'Back'}
        </div>
    );
}

export function LanguageToggle() {
    const { language, setLanguage } = useTest();
    return (
        <button 
            onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
            style={{ 
                position: 'absolute', top: 10, right: 10, padding: '5px 10px', 
                zIndex: 1000, cursor: 'pointer', background: 'rgba(255,255,255,0.7)', 
                border: '1px solid #ccc', borderRadius: '5px', color: '#000'
            }}
        >
            {language === "ko" ? "ENG" : "한국어"}
        </button>
    );
}
`;
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\components.js', code, 'utf8');
