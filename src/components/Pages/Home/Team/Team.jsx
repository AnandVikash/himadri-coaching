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
              src={"/assets/final_candidate_desktop.jpg"}
              width={1520}
              height={500}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
            />
          </section>
          <section className={styles.mobile_image}>
            <Image
              src={"/assets/final_candidate_mobile.jpg"}
              width={390}
              height={360}
              alt="Picture of the author"
              style={{ objectFit: "contain" }}
              className={styles.mobile_banner}
            />
          </section>
        </Container>
      </section>
    </section>
  );
}
