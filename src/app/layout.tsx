import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionSystem from "@/components/MotionSystem";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "FRC 854 | Iron Bears Robotics",
  description:
    "Meet Iron Bears, FRC Team 854 at Martingrove Collegiate Institute in Toronto. Student-built robots, real engineering, and a community that makes it possible.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('iron-bears-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <MotionSystem />
        {children}
        <Footer />
        {process.env.VERCEL === "1" && <SpeedInsights />}
      </body>
    </html>
  );
}
