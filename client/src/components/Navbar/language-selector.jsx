import { useTranslation } from "react-i18next";
import styles from "./navbar.module.css";

const languages = [
  { code: "fr", lang: "FR" },
  { code: "en", lang: "ENG" },
];

function Languageselector() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div>
      {languages.map((lng) => (
        <button
          className={styles.languageButton}
          type="submit"
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
        >
          {lng.lang}
        </button>
      ))}
    </div>
  );
}

export default Languageselector;
