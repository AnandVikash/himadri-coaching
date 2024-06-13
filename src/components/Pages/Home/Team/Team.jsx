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
            <section className={styles.about_section}>
              <section>
                <Image
                  src="https://placehold.jp/400x400.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  // style={{ objectFit: "cover" }}
                />
              </section>
              <section>
                <h2>Join The Success Team Creators Of</h2>
                <ul className={styles.ranker_details}>
                  <li className={styles.ranker_text}>
                    <span>
                      <TiTick />
                    </span>
                    <p className="ptag">IAS 1st Rank</p>
                  </li>
                  <li className={styles.ranker_text}>
                    <span>
                      <TiTick />
                    </span>{" "}
                    <p className="ptag">Youngest IPS Officers</p>
                  </li>
                  <li className={styles.ranker_text}>
                    <span>
                      <TiTick />
                    </span>{" "}
                    <p className="ptag">KAS 1st Rank</p>
                  </li>
                  <li className={styles.ranker_text}>
                    <span>
                      <TiTick />
                    </span>{" "}
                    <p className="ptag">3000+ selections in Elite Services</p>
                  </li>
                </ul>
                <section className={styles.ranker_name}>
                  <h3>Mr. Mithun IPS</h3>
                </section>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
