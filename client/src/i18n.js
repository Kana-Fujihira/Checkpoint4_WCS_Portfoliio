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
          Recommendation: "Recommendation",
          Contact: "Contact",
          greeting: "Hello, I am Kana. Welcome to my portfolio!",
          OrderCheese: "2017-2018 Tokyo",
          OrderCheeseJob: "Account Executive",
          OrderCheeseDetail:
            "Selling European products for Japanese BtoB restaurant market.",
          Beacon: "2018-2019 @Tokyo",
          BeaconJob: "Account Executive",
          BeaconDetail:
            "Assisted Philip Morris and P&G with ad and communication campaigns.",
          WAKAZE: "2021-2023 @Paris/Lyon",
          WAKAZEJob: "Account Manager",
          WAKAZEDetail:
            "Managing BtB French/European accounts at a French-Japanese Sake Startup.",
          ProjectName: "Project Name",
          ProjectDescription: "Project Description",
          Skill: "Technologies used",
          titleReview: "Reviews from previous colleagues",
          title1stReview: "《 Organised and creativity 》",
          name1stReview: "Shino Account Manager from Beacon Communication",
          message1stReview:
            '"Kana\'s organizational skills and creativity are outstanding. She consistently delivers innovative solutions while keeping projects well-structured and on track."',
          title2ndReview: "《 Communication and team spirit 》",
          name2ndReview: "Takuma CEO from WAKAZE FRANCE",
          message2ndReview:
            '"Kana excels in communication and fosters a strong team spirit. Her ability to collaborate effectively and motivate others is truly impressive."',
          title3rdReview: "《 Organised and creativity 》",
          name3rdReview: "Alexandre IT Consultant from Exalt",
          message3rdReview:
            '"Kana\'s patience and attention to detail are remarkable. She meticulously reviews every aspect of her work, ensuring the highest quality output."',
          Name: "Name",
          Email: "Email",
          PhoneNumber: "Phone Number",
          CompanyName: "Company Name",
          YourMessage: "Your Message",
          Send: "Send",
        },
      },
      fr: {
        translation: {
          home: "Accueil",
          WorkExperience: "Expérience professionnelle",
          Project: "Mes Projets",
          Recommendation: "Recommandation",
          Contact: "Contactez-moi",
          greeting: "Bonjour, je suis Kana. Bienvenue sur mon site !",
          OrderCheese: "2017-2018 Tokyo",
          OrderCheeseJob: "Responsable de client",
          OrderCheeseDetail:
            "Gestion des fournisseurs européens de fromages/spiritueux pour le marché japonais.",
          Beacon: "2018-2019 @Tokyo",
          BeaconJob: "Responsable de client",
          BeaconDetail:
            "Gestion des campagnes pub pour grands clients comme Philip Morris et P&G.",
          WAKAZE: "2021-2023 @Paris/Lyon",
          WAKAZEJob: "Responsable de grands comptes",
          WAKAZEDetail:
            "Gestion des comptes BtoB français/européens de l'entreprise franco-japonaise Sake Startup.",
          ProjectName: "Nom de projet",
          ProjectDescription: "Description de projet",
          Skill: "Technologies utilisées",
          titleReview: "Témoignages de collègues précédents",
          title1stReview: "《 Organisation et créativité 》",
          name1stReview: "Shino de Account Manager de Beacon Communication",
          message1stReview:
            '"L\'organisation et la créativité de Kana sont exceptionnelles. Elle propose constamment des solutions innovantes tout en maintenant les projets bien structurés et dans les délais."',
          title2ndReview: "《 Communication et esprit d'équipe 》",
          name2ndReview: "Takuma CEO de WAKAZE FRANCE",
          message2ndReview:
            '"Kana excelle en communication et favorise un fort esprit d\'équipe. Sa capacité à collaborer efficacement et à motiver les autres est vraiment impressionnante."',
          title3rdReview: "《 Patience et attention aux détails 》",
          name3rdReview: "Alexandre Consultant de Exalt",
          message3rdReview:
            '"La patience et l\'attention aux détails de Kana sont remarquables. Elle examine méticuleusement chaque aspect de son travail, garantissant des résultats de la plus haute qualité."',
          Email: "Adresse e-mail",
          PhoneNumber: "Numéro de téléphone",
        },
      },
    },
  });
