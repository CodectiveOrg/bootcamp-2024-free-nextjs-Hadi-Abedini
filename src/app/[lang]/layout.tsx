import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google';
import "./globals.css";
import { LanguageType } from "./dictionaries";

const vazirMatn = Vazirmatn({
  display: 'swap',
  subsets: ['latin', 'arabic']
});


export const metadata: Metadata = {
  title: "دکتر من",
  description: 'پلتفرم آنلاین برای مشاوره پزشکی',
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: LanguageType };
}>) {
  return (
    <html lang={lang} dir={lang === "fa" ? "rtl" : "ltr"} className={vazirMatn.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
