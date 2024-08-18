import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    {
      path: "./satoshi/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
