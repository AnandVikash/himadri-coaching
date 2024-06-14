"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./aboutus.module.css";
import Image from "next/image";
export default function AboutUS() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <section className={styles.content}>
        <Container width>
          <section className={styles.about_container}>
            <h2>You Will Become IAS District Magistrate</h2>
            <section className={styles.about_section}>
              <section className={styles.about_img_wrapper}>
                <Image
                  src={"/assets/keshav_himadri.jpg"}
                  width={750}
                  height={400}
                  alt="Picture of the author"
                  className={styles.about_img}
                  style={{ objectFit: "cover" }}
                />
              </section>
              <section>
                <div className={styles.about_content}>
                  <span>About Himalai Keshav Sir</span>
                  <p className="ptag">
                    Since 1998, Master Mentor Himalai Keshav Sir made 3000+
                    Indian Administrators IAS, IPS, IFS, IRS, KAS and Armed
                    Force Officers CDS, AFCAT, INET, AC CAPF and Central
                    Government Officers Group &apos;A&apos; & &apos;B&apos;
                    officers. Sir Students Serving in more than 17 States, and
                    Union Territories Foreign Countries as High Commissioners,
                    Ambassador
                  </p>
                </div>
                <ul className={styles.listing_items}>
                  <p>Under Sir Mentorship</p>
                  <li>
                    Yogesh Mishra become Commissioner, Today Yogesh Mishra
                    Eldest Sister is IPS, Brother is IAS, Brother&apos;s Wife
                    also IAS, Youngest Sister is IAS
                  </li>
                  <li>Shilpi Srivatsav is IAS District Magistrate</li>
                  <li>Doreen is IFS High Commissioners</li>
                  <li>Nirmala is KSPS</li>
                </ul>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
