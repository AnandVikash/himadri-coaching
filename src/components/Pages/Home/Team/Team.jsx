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
          <section className={styles.team_container}>
            <section className={styles.team_content}>
              <section>
                <Image
                  src="https://placehold.jp/400x400.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
              </section>
              <section className={styles.team_text}>
                <h2>Join The Success Team Creators Of</h2>
                <section className={styles.team_success}>
                  <article>
                    <TiTick />
                  </article>
                  <article>IAS 1st RANK</article>
                </section>
                <section className={styles.team_success}>
                  <article>
                    <TiTick />
                  </article>
                  <article>IAS 1st RANK</article>
                </section>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
