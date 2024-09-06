import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import { inter } from "./fonts";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="m-auto max-w-5xl">
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </main>
      </body>
    </html>
  );
}
