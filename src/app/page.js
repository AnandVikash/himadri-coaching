import Image from "next/image";
import styles from "./page.module.css";
import SideNavWidgets from "@/components/Ui/SideNavWidgets/Index";
import Banner from "@/components/Pages/Home/Banner/Banner";
import Team from "@/components/Pages/Home/Team/Team";
import WhyUs from "@/components/Pages/Home/WhyUs/WhyUs";
import AboutUs from "@/components/Pages/Home/AboutUs/AboutUs";
import Contact from "@/components/Pages/Home/Contact/Contact";
import Training from "@/components/Pages/Home/Training/Training";
import Batches from "@/components/Pages/Home/Batches/Batches";
import Popup from "@/data/PopUp/PopUp";
import Testimonials from "@/components/Pages/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Popup />
      <SideNavWidgets />
      <Banner />
      <Team />
      <WhyUs />
      <AboutUs />
      <Batches />
      <Training />
      <Testimonials />
      <Contact />
      <div className={styles.mobile_bottom_container}>
        <div className={styles.mobile_bottom}>
          <div className={`${styles.mobile_bottom_1} ${styles.bottomwhatsapp}`}>
            <div className={styles.mobile_bottom_img}>
              <i className="fa-regular fa-calendar-check"></i>
            </div>
            <div className={styles.mobile_bottom_text}>
              <a href="https://api.whatsapp.com/send/?phone=7975057610&text=Hi,I%20have%20a%20query">
                Whats App
              </a>
            </div>
          </div>
          <div className={`${styles.mobile_bottom_1} ${styles.bottomcall}`}>
            <div className={styles.mobile_bottom_img}>
              {/* <i className="fa-solid fa-phone"></i> */}
            </div>
            <div className={styles.mobile_bottom_text}>
              <a href="tel:+917975057610"> Call Us</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
