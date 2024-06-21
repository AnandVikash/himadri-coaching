import { Roboto } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

//swiper css
import "swiper/css";
import "swiper/css/navigation";

const Header = dynamic(() => import("@/components/Layout/Header/Header"), {
  ssr: false,
});

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
        <Script id="gtm" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KWMMBKVS');
          `}
        </Script>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.png"></link>
      </head>
      <body className={inter.className}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWMMBKVS" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <Header />
        {children}
        <Footer />
        <Whatsapp />
      </body>
    </html>
  );
}
