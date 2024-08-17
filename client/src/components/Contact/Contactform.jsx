import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidationContact from "./contactValidation";
import styles from "./contact.module.css";

function Contactform() {
  const { t } = useTranslation();

  const [contactValues, setContactValues] = useState({
    name: "",
    email: "",
    phonenumber: "",
    companyname: "",
    message: "",
  });
  const navigate = useNavigate();

  const [errorsContact, setErrorsContact] = useState({});

  const handleInputContact = (event) => {
    setContactValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.info(contactValues);

  const handleSend = async (event) => {
    event.preventDefault();

    const validationErrors = ValidationContact(contactValues);
    setErrorsContact(validationErrors);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: contactValues.name,
            email: contactValues.email,
            phonenumber: contactValues.phonenumber,
            companyname: contactValues.companyname,
            message: contactValues.message,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error during registration");
      }

      const data = await response.json();
      navigate("/validation");
      console.info("Request successful:", data);
    } catch (err) {
      console.error("Error during contact:", err);
      console.info("Error has occurred during connection");
    }
  };

  return (
    <div>
      <div className={styles.contactTitle}>
        <h2 className={styles.maker}>{t("Contact")}</h2>
      </div>
      <form className={styles.contactContainer} onSubmit={handleSend}>
        <div>
          <label htmlFor="name">
            <p>{t("Name")}</p>
          </label>
          <input
            type="text"
            placeholder="Kana PEDRINIS"
            name="name"
            value={contactValues.name}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.name !== undefined && (
              <span>{errorsContact.name}</span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="email">
            <p>{t("Email")}</p>
          </label>
          <input
            type="email"
            placeholder="kana@kana.com"
            name="email"
            value={contactValues.email}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.email !== undefined && (
              <span>{errorsContact.email}</span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="number">
            <p>{t("PhoneNumber")}</p>
          </label>
          <input
            type="tel"
            placeholder="09074286987"
            name="number"
            value={contactValues.number}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.number !== undefined && (
              <span>{errorsContact.number}</span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="name">
            <p>{t("CompanyName")}</p>
          </label>
          <input
            type="companyname"
            placeholder="Kana.co.ltd"
            name="companyname"
            value={contactValues.companyname}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.companyname !== undefined && (
              <span>{errorsContact.companyname}</span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="message">
            <p>{t("YourMessage")}</p>
          </label>
          <input
            type="text"
            placeholder="Request an online meeting"
            name="message"
            size="50"
            value={contactValues.message}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.message !== undefined && (
              <span>{errorsContact.message}</span>
            )}
          </p>
        </div>
        <button type="submit">
          <p>Send</p>
        </button>
      </form>
    </div>
  );
}

export default Contactform;
