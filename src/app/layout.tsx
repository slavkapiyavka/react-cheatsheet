import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import HeaderComponent from "@/components/HeaderComponent";
import NavigationComponent from "@/components/NavigationComponent";
import "../styles/entry.css";

const martianMono = Martian_Mono({ subsets: ['cyrillic', 'latin']});

export const metadata: Metadata = {
  title: "Шпора | React",
  description: "приложение шпаргалка по React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${martianMono.className} layout`}>
          <HeaderComponent />
          <NavigationComponent />
          <main className="main">{children}</main>
      </body>
    </html>
  );
}
