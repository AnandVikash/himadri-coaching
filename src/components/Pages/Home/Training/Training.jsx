"use client";
import React from "react";
import Container from "@/components/Layout/Container";
import styles from "./training.module.css";
import { TiTick } from "react-icons/ti";
export default function Training() {
  return (
    <section className={`${styles.wrapper} margin`}>
      <section className={styles.content}>
        <Container width>
          <section className={styles.training_container}>
            <h2>Best Exclusive Separate Classes for IAS from Himalai </h2>
            <p className="ptag">
              (Himadri is Sister concern of Himalai owned by Keshav Sir)
            </p>
            <section className={styles.items_content}>
              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST GOAL</p>
                  <span>
                    Mentoring Students to Clear Exam with All India IAS First
                    Rank
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST CHOICE FOR BEGINNERS </p>
                  <span>Emphasis on Basic Concepts, Meaning, Examples</span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST PRELIMS PRINTED STUDY MATERIALS </p>
                  <span>
                    Chapter Wise and Subject Wise Prelims Complete Study
                    Materials
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST GS PRELIMS CLASS ROOM COURSE </p>
                  <span>
                    IAS 100 Percent Prelims Syllabus Coverage with Previous
                    Year’s Questions Answers
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST CSAT PRELIMS PROBLEMS PRACTICE </p>
                  <span>
                    10,000 APTITUDE (Mathematics, Reasoning English) Multiple
                    Choice Previous Years Questions Practice{" "}
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST GS PRELIMS QUESTIONS PRACTICE</p>
                  <span>
                    10,000 GS Prelims (Science, History, Geography, Economy,
                    Polity, Environment) Multiple Choice Previous Years
                    Questions Practice
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">Best Mains Printed Study Materials </p>
                  <span>
                    Chapter Wise and Subject Wise Mains Complete Study Materials{" "}
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">
                    BEST GS PAPER I, II, III, ETHICS CLASS ROOM COURSES{" "}
                  </p>
                  <span>
                    IAS 100 Percent GS, Essay, Ethics Mains Syllabus Coverage
                    with Previous Year’s Questions Answers{" "}
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">
                    BEST MAINS GS, ESSAY, ETHICS, LANGUAGES QUESTIONS PRACTICE{" "}
                  </p>
                  <span>
                    GS, Essay, Ethics, Indian Language, English Previous Years
                    Questions Based Weekly Tests{" "}
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">
                    BEST SCORING OPTIONAL SUBJECT CLASS ROOM COURSES{" "}
                  </p>
                  <span>
                    100 Percent Optional Subject Syllabus Coverage with Previous
                    Year’s Questions Answers{" "}
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST INTERVIEW TRAINING</p>
                  <span>
                    100 Mock Interviews (as per interview date) before real
                    Interview. Accompanying Students and Face To Face Personal
                    Interview Training at Delhi
                  </span>
                </section>
              </section>

              <section className={styles.items_section}>
                <section className={styles.items_icon}>
                  <TiTick />
                </section>
                <section className={styles.items_list}>
                  <p className="ptag">BEST LIFE TIME VALIDITY </p>
                  <span>
                    Mentoring up to Seeing Student Name in IAS Official
                    Selection List
                  </span>
                </section>
              </section>
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
}
