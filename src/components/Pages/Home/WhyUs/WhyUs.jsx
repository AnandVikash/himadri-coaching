"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import { ImAndroid } from "react-icons/im";
import Image from "next/image";
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
                Immediate Goal along with Mentoring Students to Become IAS
                DISTRICT MAGISTRATE as Ultimate Goal{" "}
              </p>
              <span>Double Results Guarantee </span>
            </section>

            <section className={styles.box_container}>
              <section className={styles.box_items}>
                <Image
                  src={"/assets/service-1.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                {/* <ImAndroid /> */}
                <ul>
                  <li>
                    {" "}
                    Mentoring Students to CLEAR EXAM WITH ALL INDIA IAS FIRST
                    RANK{" "}
                  </li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-2.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>
                    {" "}
                    Coaching Students for CLEARING GOVERNMENT OF INDIA GROUP “A”
                    & “B” OFFICERS EXAM
                  </li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-3.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>Teaching Common Subjects for all exams</li>
                  <li>Teaching Exam Specific Special Subjects</li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-4.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>
                    Teaching from Mentors (Hand Written) Exam Passing Notes
                  </li>
                  <li>Teaching from Printed Study Materials</li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-5.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>Teaching Chapter Wise Basics in Every Subject</li>
                  <li>
                    Teaching Previous Year’s Question Answers From Day One
                  </li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-6.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>
                    Conducting Weekly Tests On Multiple Choice and Descriptive
                    Questions
                  </li>
                  <li>Conducting Fortnight Oral Tests</li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-1.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>Mentor’s Face to Face Interaction</li>
                  <li>Mentor’s Tele Call Interactions</li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-7.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>Mentorship from Master Mentor</li>
                  <li>
                    Teaching from Subject Experts and Exam passed Faculties
                  </li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-8.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>
                    IAS GS Prelims 10,000 Chapter wise Previous Years Questions
                    Practice
                  </li>
                  <li>
                    10, 000 Maths, Reasoning, English Previous Years Questions
                    Practice
                  </li>
                </ul>
              </section>

              <section className={styles.box_items}>
                {/* <ImAndroid /> */}
                <Image
                  src={"/assets/service-9.svg"}
                  width={30}
                  height={30}
                  alt="Picture of the author"
                />
                <ul>
                  <li>
                    IAS GS Prelims 5 Revision Classes for clarity & memorising
                  </li>
                  <li>APTITUDE 3 Revision classes for clarity & memorising</li>
                </ul>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
