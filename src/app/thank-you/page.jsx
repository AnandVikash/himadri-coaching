import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./pages.module.css";

export default function page() {
  return (
    <>
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
