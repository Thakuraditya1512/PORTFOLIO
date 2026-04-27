import type { Metadata } from "next";
import "./globals.css";
import SpaceLoading from "./components/SpaceLoading";

export const metadata: Metadata = {
  title: "Thakur Aditya Singh | Full-Stack & AI Engineer",
  description:
    "Portfolio of Thakur Aditya Singh — Full-Stack Software Engineer at LTIMindtree specializing in Java, Spring Boot, React, Angular, Node.js, AI/ML, and Cloud technologies.",
  keywords: [
    "Thakur Aditya Singh",
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Angular",
    "Spring Boot",
    "LTIMindtree",
    "AI Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Thakur Aditya Singh" }],
  openGraph: {
    title: "Thakur Aditya Singh | Full-Stack & AI Engineer",
    description:
      "Portfolio of Thakur Aditya Singh — Full-Stack Software Engineer specializing in enterprise-grade web platforms and AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SpaceLoading />
        {children}
      </body>
    </html>
  );
}
