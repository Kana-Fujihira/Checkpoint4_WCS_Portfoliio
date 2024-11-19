import { useTranslation } from "react-i18next";

function WakazeFrance() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("WorkExperience")} WAKAZE FRANCE</h1>
      <h3>{t("WakazeJob")}</h3>
      <h2>{t("JobDetails")}</h2>
      <h3>{t("WakazeJobDetails")} </h3>
      <h2>{t("JobResults")}</h2>
      <h3>{t("WakazeJobResult")}</h3>
      <h2>{t("JobSkilss")}</h2>
      <h3>{t("WakazeCompetence")}</h3>
    </div>
  );
}

export default WakazeFrance;
