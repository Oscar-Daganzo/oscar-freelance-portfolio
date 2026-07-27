import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Oscar Daganzo | Diseño técnico sostenible",
    template: "%s | Oscar Daganzo",
  },
  description:
    "Diseño técnico sostenible para stands, expositores y mobiliario: planos, despieces, archivos DWG/DXF y soluciones modulares pensadas para fabricar, transportar y reutilizar.",
  keywords: [
    "diseño técnico",
    "diseño sostenible",
    "planos técnicos",
    "despieces",
    "DWG",
    "DXF",
    "CNC",
    "diseño modular",
    "stands",
    "Gavà",
    "Barcelona",
  ],
  authors: [{ name: "Oscar Daganzo" }],
  creator: "Oscar Daganzo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Oscar Daganzo | Diseño técnico sostenible",
    description:
      "Diseñar para fabricar. Pensar para reutilizar. Desarrollo técnico modular para stands, expositores y mobiliario.",
    locale: "es_ES",
    type: "website",
  },
  other: {
    "theme-color": "#f2f0e7",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
