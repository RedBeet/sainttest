import { TestProvider } from "./context/context";

import "./globals.css";

export const metadata = {
  title: "::VIA::",
  description: "MOVEMENT OF CATHOLIC STUDENT",
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
