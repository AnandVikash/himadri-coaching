"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./team.module.css";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
export default function Team() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <section className={styles.content}>
        <Container width>
          <section className={styles.about_container}>
            <Image
              src={"/assets/harshavardhan.jpg"}
              width={1520}
              height={500}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.about_container}>
            <Image
              src={"/assets/candi-banner.jpg"}
              width={1520}
              height={500}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.about_container}>
            <Image
              src={"/assets/nirmal.jpg"}
              width={1520}
              height={500}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.mobile_container}>
            <Image
              src={"/assets/harshavardhan.jpg"}
              width={1520}
              height={500}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.mobile_container}>
            <Image
              src={"/assets/team_banner.jpg"}
              width={1520}
              height={200}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.mobile_container}>
            <Image
              src={"/assets/nirmal.jpg"}
              width={1520}
              height={300}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
        </Container>
      </section>
    </section>
  );
}
