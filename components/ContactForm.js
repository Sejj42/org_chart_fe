import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "@/styles/ContactForm.module.css";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const hasEmptyFields = Object.values(values).some((value) => value === "");
    if (hasEmptyFields) {
      toast.error("plz fill in all fields");
    } else {
      toast.success(
        "Your message has not been sent successfully. To reach out, send me an email instead."
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name"></label>
          <input
            className={styles.inputField}
            placeholder="Full Name"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            className={styles.inputField}
            placeholder="Email"
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone"></label>
          <input
            className={styles.inputField}
            placeholder="Phone Number"
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="message"></label>
          <textarea
            className={styles.textareaInputField}
            placeholder="Message"
            type="text"
            id="message"
            name="message"
            value={values.message}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="submit"
          value="Big Send Button"
          className={styles.subBtn}
        />
      </form>
    </>
  );
};

export default ContactForm;
