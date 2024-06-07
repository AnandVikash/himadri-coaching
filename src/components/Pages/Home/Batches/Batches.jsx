"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./batches.module.css";
import { TiTick } from "react-icons/ti";
export default function Batches() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <section className={styles.content}>
        <Container width></Container>
      </section>
      <section className={styles.wrapper_img}>
        <section className={styles.wrapper_bg}></section>
        <section className={styles.wrapper_text}>
          <h2>Best KAS coaching in Bangalore </h2>
          <section className={styles.batches_container}>
            <section className={styles.batches_icon}>
              <TiTick />
            </section>
            <section className={styles.batches_list}>
              <p className="ptag">
                Online & Offline classes In English& Kannada medium
              </p>
            </section>
          </section>
          <section className={styles.batches_container}>
            <section className={styles.batches_icon}>
              <TiTick />
            </section>
            <section className={styles.batches_list}>
              <p className="ptag">
                Batches: Morning Morning Afternoon Evening Weekends
              </p>
            </section>
          </section>
          <section className={styles.batches_container}>
            <section className={styles.batches_icon}>
              <TiTick />
            </section>
            <section className={styles.batches_list}>
              <p className="ptag">Long term Classes for PUC, Under Graduates</p>
            </section>
          </section>
          <section className={styles.batches_container}>
            <section className={styles.batches_icon}>
              <TiTick />
            </section>
            <section className={styles.batches_list}>
              <p className="ptag">
                IAS, NEET, IIT NDA Foundation with Class 6, 7, 8 School Subjects
                teaching for School students
              </p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
