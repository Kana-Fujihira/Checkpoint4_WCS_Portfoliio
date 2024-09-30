import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ValidationContact from "./contactValidation";
import CatKaeruCall from "../../assets/images/catkaerucall.svg";
import CatKaeruCall2 from "../../assets/images/catkaerucall2.svg";
import styles from "./contact.module.css";

function Contactform() {
  const { t } = useTranslation();

  const [avatar, setAvatar] = useState(false);

  const handleMouseEnter = () => {
    setAvatar(true);
  };
  const handleMouthLeavve = () => {
    setAvatar(false);
  };

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
        <h1 className={styles.maker}>{t("Contact")}</h1>{" "}
        <img
          src={avatar ? CatKaeruCall : CatKaeruCall2}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouthLeavve}
          alt="CatAndFrogCallImage"
          className={styles.contactImage}
        />
      </div>

      <form className={styles.contactContainer} onSubmit={handleSend}>
        <div>
          <label htmlFor="nameInput">
            <p>{t("Name")}</p>
          </label>
          <input
            type="text"
            placeholder="Kana PEDRINIS"
            id="nameInput"
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
          <label htmlFor="emailInput">
            <p>{t("Email")}</p>
          </label>
          <input
            type="email"
            placeholder="hello@cat.com"
            id="emailInput"
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
          <label htmlFor="numberInput">
            <p>{t("PhoneNumber")}</p>
          </label>
          <input
            type="tel"
            placeholder="06XXXXXXXX"
            id="numberInput"
            name="phonenumber"
            value={contactValues.phonenumber}
            onChange={handleInputContact}
          />
          <p className={styles.errorsField}>
            {errorsContact.number !== undefined && (
              <span>{errorsContact.number}</span>
            )}
          </p>
        </div>
        <div>
          <label htmlFor="compnayNameInput">
            <p>{t("CompanyName")}</p>
          </label>
          <input
            type="text"
            placeholder="Kana.co.ltd"
            id="companyNameInput"
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
          <label htmlFor="messageInput">
            <p>{t("YourMessage")}</p>
          </label>
          <input
            type="text"
            placeholder="Request an online meeting"
            id="messageInput"
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
          <p>{t("Send")}</p>
        </button>
      </form>
    </div>
  );
}

export default Contactform;
