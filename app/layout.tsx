import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import VerticalHeader from "@/components/VerticalHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mxdeley",
  description: "A simple blog and where I dump my thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("dark:bg-stone-950", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <VerticalHeader/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
