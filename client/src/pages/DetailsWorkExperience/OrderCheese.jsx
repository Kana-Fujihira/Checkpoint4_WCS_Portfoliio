import { useTranslation } from "react-i18next";

function OrderCheese() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("WorkExperience")} Beacon Communication</h1>
      <h3>{t("OrderCheeseJob")}</h3>
      <h2>{t("JobDetails")}</h2>
      <h3>{t("OrdeerCheeseJobDetails")} </h3>
      <h2>{t("JobResults")}</h2>
      <h3>{t("OrderCheeseResult")}</h3>
      <h2>{t("JobSkilss")}</h2>
      <h3>{t("OrderCheeseCompetence")}</h3>
    </div>
  );
}

export default OrderCheese;
