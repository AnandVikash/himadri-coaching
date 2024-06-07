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
              <section>
                <Image
                  src={"/assets/avatar.jpg"}
                  width={750}
                  height={400}
                  alt="Picture of the author"
                  className={styles.about_img}
                  style={{ objectFit: "cover" }}
                />
              </section>
              <section>
                <div className={styles.about_content}>
                  <span>About Me</span>
                  <p className="ptag">
                    Since 1998, Master Mentor Keshav Sir made 3000+ Indian
                    Administrators IAS, IPS, IFS, IRS, KAS And Armed Force
                    Officers CDS, AFCAT, INET, AC CAPF And Central Government
                    Officers Group A &B officers Sir Students Serving in more
                    than 17 States and Union Territories
                  </p>
                </div>
                <ul className={styles.listing_items}>
                  <p>Under Sir Mentorship</p>
                  <li>
                    Yogesh Mishra become Commissioner Today Yogesh Mishra Eldest
                    Sister is IPS, Brother is IAS , Brothe’rs Wife also IAS
                    Youngest Sister is IAS
                  </li>
                </ul>
                <ul className={styles.listing_items}>
                  <p>Under Sir Mentorship </p>
                  <li>Sreenidhi Become Youngest IAS Sub District Magistrate</li>
                  <li>Nirmala become KSPS officer</li>
                </ul>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
