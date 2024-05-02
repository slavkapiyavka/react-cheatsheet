import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";

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
      <body className={martianMono.className}>{children}</body>
    </html>
  );
}
