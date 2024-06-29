import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./pages.module.css";
import Script from "next/script";

export default function page() {
  return (
    <>
      <Script id="gtag">
        {`  gtag('event', 'conversion', {'send_to': 'AW-986592530/lhTZCKL8_r0ZEJLquNYD'});`}
      </Script>
      <section className={styles.wrapper}>
        <section className={styles.content}>
          <Container width>
            <h1>
              Thank you for your interest in Himalai. We will get back to you
              soon.
            </h1>
          </Container>
        </section>
      </section>
    </>
  );
}
