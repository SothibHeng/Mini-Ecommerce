import FooterComponent from "@/components/ui/footer/FooterComponent";
import "@/app/globals.css";
import NavBarComponent from "@/components/ui/nav-bar/NavBarComponent";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased w-full h-auto flex flex-col justify-between",
          fontSans.variable
        )} >
        <header>
          <NavBarComponent />
        </header>
        <main className="flex-grow">
        {children}
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </body>
    </html>
  );
}
