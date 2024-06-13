"use client";
import styles from "./testimonials.module.css";
import Container from "@/components/Layout/Container";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
// import Container from "../../../../HeaderFooter/Container";
export default function Testimonials() {
  return (
    <section className={styles.reviews_wrapper} id="testimonials_slider">
      <Container width>
        <h2>Himalai Toppers Testimonials</h2>
        <section className={styles.reviews_items}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 5000,
              stopOnLastSlide: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: ".button-next-testimonial-slide",
              prevEl: ".button-prev--testimonial-slide",
            }}
            modules={[Navigation, Autoplay]}
            className="testimonial_slider"
          >
            <SwiperSlide>
              <section className={styles.slider_review_item}>
                <article className={styles.slide_review}>
                  <section className={styles.slide_author}>
                    <Image
                      src={"/assets/pemmaia.png"}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                      className={styles.about_img}
                    />
                  </section>
                  <section className={styles.author_container}>
                    <div className={styles.author_text}>
                      <p className="ptag">
                        It was an excellent journey with Himalai institution in
                        my preparation for Civil Service.The guidance I got from
                        Himalai and the support I got from Keshav sir right from
                        preliminary exam up to interview level was excellent and
                        I&apos;m grateful and thankful for that.
                      </p>
                    </div>
                    <div className={styles.author_details}>
                      <div>
                        <span>Dr Pemmaiah IRS</span>
                        <Image
                          src={"/assets/5-star.png"}
                          width={200}
                          height={30}
                          alt="Picture of the author"
                          className={styles.about_star}
                        />
                      </div>
                    </div>
                  </section>
                </article>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className={styles.slider_review_item}>
                <article className={styles.slide_review}>
                  <section className={styles.slide_author}>
                    <Image
                      src={"/assets/dilip.png"}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                      className={styles.about_img}
                    />
                  </section>
                  <section className={styles.author_container}>
                    <div className={styles.author_text}>
                      <p className="ptag">
                        I feel great to be a part of Himalai IAS coaching.I
                        would like to thank Mr.Keshav sir,who was part of my
                        Civil Services journey.It is because of his motivation
                        and guidelines that I am able to secure AIR -48 in IFoS.
                      </p>
                    </div>
                    <div className={styles.author_details}>
                      <div>
                        <span>Dilip Kumar Yadav - IFoS</span>
                        <Image
                          src={"/assets/5-star.png"}
                          width={200}
                          height={30}
                          alt="Picture of the author"
                          className={styles.about_star}
                        />
                      </div>
                    </div>
                  </section>
                </article>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className={styles.slider_review_item}>
                <article className={styles.slide_review}>
                  <section className={styles.slide_author}>
                    <Image
                      src={"/assets/abdul.png"}
                      width={150}
                      height={150}
                      alt="Picture of the author"
                      className={styles.about_img}
                    />
                  </section>
                  <section className={styles.author_container}>
                    <div className={styles.author_text}>
                      <p className="ptag">
                        I was associated with Himalai and Keshav sir as a
                        student for KAS ,I was given with right guidance and
                        good infrastructure to sit and study everyday.I was
                        personally monitored on the preparation right from
                        prelims,mains and interview . Special thanks to Keshav
                        sir and immense guidance in Mains and Interview.
                      </p>
                    </div>
                    <div className={styles.author_details}>
                      <div>
                        <span>Abdul Rab - KAS</span>
                        <Image
                          src={"/assets/5-star.png"}
                          width={200}
                          height={30}
                          alt="Picture of the author"
                          className={styles.about_star}
                        />
                      </div>
                    </div>
                  </section>
                </article>
              </section>
            </SwiperSlide>
          </Swiper>
          {/* <div className={styles.team_buttons}>
            <button className="button-prev--testimonial-slide">
              <FaArrowLeft />
            </button>
            <button className="button-next-testimonial-slide">
              <FaArrowRight />
            </button>
          </div> */}
          {/* <a href="">Book Appointment </a> */}
        </section>
      </Container>
    </section>
  );
}
