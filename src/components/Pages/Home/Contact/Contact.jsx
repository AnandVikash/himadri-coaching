"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import Link from "next/link";
import styles from "./contact.module.css";
//icons
import { FaUserCircle, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
export default function ContactUs() {
  return (
    <section className={styles.wrapper}>
      <section className={styles.content}>
        <Container width>
          <section className={styles.form_wrapper}>
            <section>
              <h3 className="title">
                Online Live and Class Room Offline classes. Register Now Kannada
                and English medium classes
              </h3>
              <form
                className={styles.form}
                method="POST"
                action="https://digikit.in/forms/himadri/contact.php"
              >
                <div className={styles.input_logo}>
                  <FaUserCircle />
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className={styles.input_logo}>
                  <FaRegEnvelope />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className={styles.input_logo}>
                  <FaPhoneAlt />
                  <input
                    type="tel"
                    name="phone"
                    pattern="^[6-9]\d{9}$"
                    id="phone"
                    placeholder="Enter Your Phone Number"
                  />
                </div>
                <div className={styles.input_logo}>
                  <MdOutlineMessage />
                  <textarea
                    id="contact_message"
                    name="contact_message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <Link href="/thankyou">
                  <div>
                    <input
                      type="submit"
                      name="submit"
                      value="Send Message"
                      className="btn btn-primary"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    />
                  </div>
                </Link>
              </form>
            </section>
            <section className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7126077103535!2d77.55684730000003!3d12.990224500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3df300000d39%3A0xb85d1b2f6f378536!2sHimalai%20IAS%7C%20KAS%7C%20Rajajinagar!5e0!3m2!1sen!2sin!4v1717484164422!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
