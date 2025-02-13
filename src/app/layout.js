import { TestProvider } from "./context/context";

import "./globals.css";

export const metadata = {
  title: "::SED-TUA::",
  description: "2025년 봄 동아리박람회",
  icons: {
    icon: "/favicon.svg",
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <TestProvider>
          {children}
        </TestProvider>
      </body>
    </html>
  );
}
