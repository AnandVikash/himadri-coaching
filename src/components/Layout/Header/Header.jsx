"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import Container from "../Container";
import styles from "./header.module.css";
//icons
import { IoCallSharp } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";

//icons
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <section className={styles.header_wrapper}>
        <Container width>
          <section className={styles.header}>
            <section className={styles.header_logo}>
              <Image
                src={"/assets/logo-ias.png"}
                width={180}
                height={50}
                alt="Picture of the author"
              />
              {/* <section className={styles.header_content}>
                <h2 className="title">Himadri</h2>
                <p className="ptag">(sister concern of Himalai since 1998)</p>
              </section> */}
            </section>
            <section className={styles.header_contact}>
              <ul>
                <li className={styles.header_contact_item}>
                  <section className={styles.header_contact_icon}>
                    <IoCallSharp />
                  </section>
                  <section className={styles.header_contact_info}>
                    <a href="tel:7975057610" target="_blank">
                      7975057610
                    </a>
                    {/* <a>+919740346715</a> */}
                  </section>
                </li>
              </ul>
            </section>
          </section>
        </Container>
      </section>
    </header>
  );
}
