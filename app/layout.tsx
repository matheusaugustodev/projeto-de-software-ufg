"use client"
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "@/components/ui/provider"
import NavBar from "@/components/navBar"
import { usePathname } from "next/navigation";
import { VoteProvider } from "@/context/VoteContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const shouldShowNavBar = !["/login", "/sign-up"].includes(pathname);

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <VoteProvider>
          <Provider>
            {shouldShowNavBar && <NavBar />}
            {children}
          </Provider>
        </VoteProvider>
      </body>
    </html>
  );
}
