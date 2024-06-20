import { Roboto } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { GoogleTagManager } from "@next/third-parties/google";
//swiper css
import "swiper/css";
import "swiper/css/navigation";

const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});

import Footer from "@/components/Layout/Footer/Footer";
import Whatsapp from "@/components/Ui/SideNavWidgets/Whatsapp/Whatsapp";
const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Himadri Coaching Center",
  description: "Himadri IAS Academy : Where Excellence Meets Guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-16609598713" />
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
