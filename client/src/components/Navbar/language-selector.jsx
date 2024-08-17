import { useTranslation } from "react-i18next";

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
          className={lng.code === i18n.language ? "selected" : ""}
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
