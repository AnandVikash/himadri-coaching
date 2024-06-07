"use client";
import Container from "@/components/Layout/Container";
//styles
import styles from "./banner.module.css";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Image from "next/image";

export default function Banner() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.banner_items}>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".button-next-slide-banner",
            prevEl: ".button-prev-slide-banner",
          }}
          loop={true}
          // autoplay={{
          //   delay: 3000,
          // }}
          speed={1600}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section className={styles.slider_item}>
              <Image
                src="https://placehold.jp/1520x520.png"
                width={1520}
                height={520}
                alt="Picture of the author"
              />
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className={styles.slider_item}>
              <Image
                src="https://placehold.jp/1520x520.png"
                width={1520}
                height={520}
                alt="Picture of the author"
              />
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
      <div className={styles.swiper_button}>
        <button className="button-prev-slide-banner">
          <GrFormPrevious />
        </button>
        <button className="button-next-slide-banner">
          <GrFormNext />
        </button>
      </div>
    </section>
  );
}
