import type { Metadata } from "next"
import { Martian_Mono } from "next/font/google"
import HeaderComponent from "@/components/header/HeaderComponent"
import NavigationComponent from "@/components/navigation/NavigationComponent"
import "../styles/entry.css"

const martianMono = Martian_Mono({ subsets: ['cyrillic', 'latin']})

export const metadata: Metadata = {
  title: "Главная | React",
  description: "приложение шпаргалка по React",
}

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
