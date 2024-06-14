import Container from "@/components/Layout/Container";
import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
//icon
import { MdFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <section className={`${styles.wrapper} `}>
      <Container width>
        <section className={styles.footer_container}>
          <section className={styles.footer_heading}>
            <h3 className="title">Himadri Officers Classes</h3>
            <p className="ptag">
              (Sister concern of Himalai IAS classes since 1998)
            </p>
          </section>
          <section className={styles.items}>
            <section className={styles.logo}>
              <div>
                <h3 className="title">Kalyan Nagar</h3>
                <p className="ptag">
                  Service Road, Above Arunagiri TVS Show Room besides KIA Show
                  Room
                </p>
              </div>
              <p className="ptag">
                <strong>Email Address :</strong> info@himalaiias.com
              </p>
              <p className="ptag">
                <strong>On-Call Service :</strong>{" "}
                <a href="tel:+917975057610" target="_blank">
                  +917975057610
                </a>
              </p>
            </section>
            <section className={styles.logo}>
              <div>
                <h3 className="title">Rajajinagar</h3>
                <p className="ptag">
                  ESI hospital Road, Near Old Police Station
                </p>
              </div>
              <p className="ptag">
                <strong>Email Address :</strong> info@himalaiias.com
              </p>
              <p className="ptag">
                <strong>On-Call Service :</strong>{" "}
                <a href="tel:+917975057610" target="_blank">
                  +917975057610
                </a>
              </p>
            </section>
            <section className={styles.social_media}>
              <h3 className="title">Quick Links</h3>
              <ul className="ultag">
                <li>
                  <a href="https://www.facebook.com/Himalai.IAS.Class/">
                    <MdFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/i/flow/login?redirect_after_login=%2FHIMALAI2">
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/iashimalai/?utm_medium=copy_link">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/c/HIMALAIIASCLASSES">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </section>
          </section>
          {/* Branches */}
          <section className={styles.branches}>
            <h3 className="title">Classes At</h3>
            <p className="ptag">
              KALYANNAGAR | RAJAJINAGAR | KORAMANGALA | JAYANAGAR | SAHAKARNAGAR
              | MARATHAHALLI | 8 TH MILE | ONLINE LIVE
            </p>
            {/* <span>
              RAJAJINAGAR | MALLESHWARAM | 8 TH MILE | SAHAKARNAGAR | ONLINE
              LIVE
            </span> */}
          </section>
        </section>
        <section className={styles.copy_rights}>
          <p className="ptag">© Copyright 2024. All Rights Reserved.</p>
          <p className="ptag">
            Designed & Developed By &nbsp;
            <a href="https://digikit.in/">Digikit</a>
          </p>
        </section>
      </Container>
    </section>
  );
}
