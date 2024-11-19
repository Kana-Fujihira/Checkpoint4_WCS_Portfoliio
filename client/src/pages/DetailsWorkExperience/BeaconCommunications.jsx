import { useTranslation } from "react-i18next";

function BeaconCommunications() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("WorkExperience")} Beacon Communication</h1>
      <h3>{t("BeaconJob")}</h3>
      <h2>{t("JobDetails")}</h2>
      <h3>{t("BeaconJobDetails")} </h3>
      <h2>{t("JobResults")}</h2>
      <h3>{t("BeaconJobResult")}</h3>
      <h2>{t("JobSkilss")}</h2>
      <h3>{t("BeaconCompetence")}</h3>
    </div>
  );
}

export default BeaconCommunications;
