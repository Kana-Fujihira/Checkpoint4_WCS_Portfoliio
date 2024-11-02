import { useTranslation } from "react-i18next";
import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";
import CatKaeruCall from "../../assets/images/catkaerucall.svg";
import CatKaeruCall2 from "../../assets/images/catkaerucall2.svg";
import styles from "./contact.module.css";

function Contactform() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    positionName: "",
    companyName: "",
    message: "",
  });

  const handleMouseEnter = () => {
    setAvatar(true);
  };
  const handleMouthLeavve = () => {
    setAvatar(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();

    // JSON形式のオブジェクトを構築
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      positionName: formData.positionName,
      companyName: formData.companyName,
      message: formData.message,
    };

    fetch("https://getform.io/f/bkkkkzwb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // JSON形式のデータを送信することを指定
        Accept: "application/json",
      },
      body: JSON.stringify(data), // JSON形式に変換して送信
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      // eslint-disable-next-line no-shadow
      .then((data) => console.info("Success:", data), navigate("/validation"))
      .catch((error) => console.info("Error:", error));
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
      <div className={styles.contactContainer}>
        <div className={styles.contactSubContainer}>
          <a href="mailto:kanafujihirapedrinis@gmail.com">
            {t("Email")} : kanafujihirapedrinis@gmail.com
          </a>
        </div>{" "}
        <div className={styles.contactSubContainer}>
          <h3>{t("PhoneNumber")} : 0667824231 </h3>{" "}
        </div>
      </div>
      <Form method="post" onSubmit={formSubmit}>
        <h2 className={styles.contactTitle}>{t("Contact")}</h2>
        
        <div className={styles.contactFormContainer}>
          <label htmlFor="name">{t("Name")}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">{t("Email")}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phone">{t("PhoneNumber")}</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <label htmlFor="positionName">{t("PositionName")}</label>
          <input
            type="text"
            name="positionName"
            value={formData.positionName}
            onChange={handleChange}
            required
          />
          <label htmlFor="companyName">{t("CompanyName")}</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">{t("YourMessage")}</label>
          <textarea
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
          />{" "}
          <button className={styles.contactFormButton} type="submit">
            <p>Envoyer</p>
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Contactform;
