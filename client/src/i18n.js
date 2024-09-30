import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "fr",
    resources: {
      en: {
        translation: {
          home: "Home",
          WorkExperience: "Work Experience",
          Project: "My Projects",
          Reccomendation: "Reccomendation",
          Contact: "Contact",
          greeting: "Hello,Welcome to my portfolio !",
          OrderCheese:
            " ▶2017-2018 Tokyo" +
            "▶Account Executive" +
            "▶Selling european products for Japanese BtoB restauurant market.",
          Beacon:
            " ▶2018-2019 @Tokyo" +
            "▶Account Executive" +
            "▶Assisted Philip Morris and P&G with ad and communication campaigns",
          WAKAZE:
            " ▶2021-2023 @Paris/Lyon" +
            "▶Account Manager" +
            "▶Managing BtB French/European account at French-Japanese Sake StartUp",
          MyTeam: "My team",
          ProjectName: "Project Name",
          Skill: "Technologies used ",
          titleReview: "Reviews from previous colleagues ",
          title1stReview: "Organised and creativity",
          name1stReview: "Shino Account Manager from Beacon Communication",
          message1stReview:
            "Kana's organizational skills and creativity are outstanding. She consistently delivers innovative solutions while keeping projects well-structured and on track.",
          title2ndReview: "Communication and team sprit",
          name2ndReview: "Takuma CEO from WAKAZE FRANCE",
          message2ndReview:
            "Kana excels in communication and fosters a strong team spirit. His ability to collaborate effectively and motivate others is truly impressive.",
          title3rdReview: "Organised and creativity",
          name3rdReview: "Alexandre IT Consultant from Exalt",
          message3rdReview:
            "Kana's patience and attention to detail are remarkable. She meticulously reviews every aspect of her work, ensuring the highest quality output.",
          Name: "Name",
          Email: "Email",
          PhoneNumber: "PhoneNumber",
          CompanyName: "Companyname",
          YourMessage: "Your Message",
          Send: "Send",
        },
      },
      fr: {
        translation: {
          home: "Accueil",
          WorkExperience: "Expérience professionnelle",
          Project: "Mes Projets",
          Reccomendation: "Recommandation",
          Contact: "Contactez moi",
          greeting: "Bonjour, Bienvenue sur mon site !",
          OrderCheese:
            " ▶2017-2018 Tokyo" +
            "▶Responsabe de client" +
            "▶Géré fournisseurs européens de fromages/spiritueux pour le marché japonais.",
          Beacon:
            " ▶2018-2019 @Tokyo" +
            "▶Responsabe de client" +
            "▶Géré campagnes pub pour grands clients comme Philip Morris et P&G. ",
          WAKAZE:
            " ▶2021-2023 @Paris/Lyon" +
            "▶Responsable grands comptes" +
            "▶Gestion du compte BtB français/européen de l'entreprise franco-japonaise Sake StartUp",
          MyTeam: "Nom de équipe",
          ProjectName: "Nom de projet",
          Skill: "Technologies utilisées ",
          titleReview: "Témoignages de collègues précédents",
          title1stReview: "Organisation et créativité",
          name1stReview: "Shino de Account Manager de Beacon Communication",
          message1stReview:
            "L'organisation et la créativité de Sarah sont exceptionnelles. Elle propose constamment des solutions innovantes tout en maintenant les projets bien structurés et dans les délais.",
          title2ndReview: "Communication et esprit d'équipe",
          name2ndReview: "Takuma CEO de WAKAZE FRANCE",
          message2ndReview:
            "Kana excelle en communication et favorise un fort esprit d'équipe. Sa capacité à collaborer efficacement et à motiver les autres est vraiment impressionnante.",
          title3rdReview: "Patience et attention aux détails",
          name3rdReview: "Alexandre Consultante de Exalt",
          message3rdReview:
            "La patience et l'attention aux détails d'Emma sont remarquables. Elle examine méticuleusement chaque aspect de son travail, garantissant des résultats de la plus haute qualité.",
          Name: "Nom et prènom",
          Email: "Adresse e-mail",
          PhoneNumber: "Numéro de téléphone",
          CompanyName: "Nom de l'entreprise",
          YourMessage: "Votre message",
          Send: "Envoyer",
        },
      },
    },
  });
