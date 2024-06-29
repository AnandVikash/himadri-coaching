import { Roboto } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

//swiper css
import "swiper/css";
import "swiper/css/navigation";

const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Footer from "@/components/Layout/Footer/Footer";
import Whatsapp from "@/components/Ui/SideNavWidgets/Whatsapp/Whatsapp";
import Script from "next/script";
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
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>{" "}
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId="AW-986592530" />{" "}
        <GoogleTagManager gtmId="G-T9ZNQ43GTF" />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWMMBKVS" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        /> */}
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
