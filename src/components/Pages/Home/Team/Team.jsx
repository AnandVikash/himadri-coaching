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
              src={"/assets/desktop_candidate_profile.jpg"}
              width={1520}
              height={520}
              alt="Picture of the author"
            />
          </section>
          <section className={styles.mobile_image}>
            <Image
              src={"/assets/phone_candidate_profile.jpg"}
              width={390}
              height={360}
              alt="Picture of the author"
              className={styles.mobile_banner}
            />
          </section>
        </Container>
      </section>
    </section>
  );
}
