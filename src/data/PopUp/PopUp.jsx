"use client";
import React from "react";
import { useState } from "react";
//styles
import styles from "./popup.module.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
export default function Popup() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    fname: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;

    setForm((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setTimeout(() => {
        setShow(true);
      }, 1000);
    }
  }, []);

  const handleActiveClick = () => {
    setShow(!show);
  };

  async function callApi(name, email, phone) {
    const payload = {
      fname: name,
      email: email,
      phone: phone,
    };
    const options = {
      method: "POST", // Or 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data
      },
      body: JSON.stringify(payload), // Convert the payload to JSON string
    };

    fetch(
      `https://teleduce.corefactors.in/lead/apiwebhook/25f9d6ae-afcf-4d6f-baf2-9ddddb1972a5/WebsiteHomePage/`,
      options
    )
      .then((response) => {
        // Handle response
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  }
  function handleSubmit(e) {
    e.preventDefault();

    let form = document.forms["pop_upform"];

    let name = form.elements["fname"].value;
    let email = form.elements["email"].value;
    let phone = form.elements["phone"].value;

    callApi(name, email, phone);
    form.submit();
  }
  return (
    <section
      className={`${styles.pop_up_container} ${
        show && styles.pop_up_container_active
      }`}
    >
      <div className={styles.pop_up_bg}></div>
      <div
        className={`${styles.pop_up_width}   ${
          show && styles.pop_up_form_show
        }`}
      >
        <div className={styles.pop_up_title}>
          <h3>Clear Exam in 1st Attempt for Detailed Info Register Now</h3>
          <AiFillCloseCircle onClick={() => handleActiveClick()} />
          <p>{form.fname.length > 1 && `Hi ${form.fname}.`}</p>
        </div>

        <form
          className={`${styles.pop_up_form}`}
          method="POST"
          action="https://digikit.in/forms/himadri/popup.php"
          id="pop_upform"
          name="pop_upform"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              name="fname"
              placeholder="Name"
              value={form.fname}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
            <input type="submit" value="Enquire Now" />
          </div>
        </form>
      </div>
    </section>
  );
}
