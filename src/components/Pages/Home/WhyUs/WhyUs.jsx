"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import { ImAndroid } from "react-icons/im";
import styles from "./whyus.module.css";
export default function WhyUs() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <section className={styles.content}>
        <Container width>
          <section className={styles.whyus_container}>
            <section className={styles.whyus_heading}>
              <h2>Why Double Course Coaching Classes </h2>
              <p className="ptag">
                Mentoring Students to Possess Secured Government Position as
                Immediate Goal Along with Mentoring Students to Become IAS
                DISTRICT MAGISTRATE as Ultimate Goal{" "}
              </p>
              <span>Double Results Guarantee </span>
            </section>

            <section className={styles.box_container}>
              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  Mentoring Students to CLEAR EXAM WITH ALL INDIA IAS FIRST RANK{" "}
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  Coaching Students for CLEARING GOVERNMENT OF INDIA GROUP “A” &
                  “B” OFFICERS EXAM
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. Teaching Common Subjects for all exams
                </p>
                <p className="ptag">
                  2. Teaching Exam Specific Special Subjects{" "}
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. Teaching from Mentors (Hand Written) Exam Passing Notes
                </p>
                <p className="ptag">2. Teaching from Printed Study Materials</p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. Teaching Chapter Wise Basics in Every Subject{" "}
                </p>
                <p className="ptag">
                  1. Teaching Previous Year’s Question Answers From Day One
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. Conducting Weekly Tests On Multiple Choice and Descriptive
                  Questions
                </p>
                <p className="ptag">2. Conducting Fortnight Oral Tests</p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">1. Mentor’s Face to Face Interaction</p>
                <p className="ptag">2. Mentor’s Tele Call Interactions</p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">1. Mentorship from Mater Mentor</p>
                <p className="ptag">
                  2. Teaching from Subject Experts and Exam passed Faculties
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. IAS GS Prelims 10,000 Chapter wise Questions Practice
                </p>
                <p className="ptag">
                  2. 10, 000 Maths, Reasoning, English Questions Practice
                </p>
              </section>

              <section className={styles.box_items}>
                <ImAndroid />
                <p className="ptag">
                  1. IAS GS Prelims 5 Revision Classes for clarity & memorising
                </p>
                <p className="ptag">
                  2. APTITUDE 5 Revision classes for clarity & memorising
                </p>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
