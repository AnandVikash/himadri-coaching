import Image from "next/image";
import styles from "./page.module.css";
import SideNavWidgets from "@/components/Ui/SideNavWidgets/Index";
import Banner from "@/components/Pages/Home/Banner/Banner";
// import Team from "@/components/Pages/Home/Team/Team";
import WhyUs from "@/components/Pages/Home/WhyUs/WhyUs";
import AboutUs from "@/components/Pages/Home/AboutUs/AboutUs";
import Contact from "@/components/Pages/Home/Contact/Contact";
import Training from "@/components/Pages/Home/Training/Training";
import Batches from "@/components/Pages/Home/Batches/Batches";
import Popup from "@/data/PopUp/PopUp";

export default function Home() {
  return (
    <main>
      <Popup />
      <SideNavWidgets />
      <Banner />
      {/* <Team /> */}
      <WhyUs />
      <AboutUs />
      <Batches />
      <Training />
      <Contact />
    </main>
  );
}
