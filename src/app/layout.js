import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faizan Farooq | Full-stack Software Engineer",
  description: "Portfolio website of Faizan Farooq, a Full-stack Software Engineer specializing in React, Node.js, AWS, and GraphQL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
