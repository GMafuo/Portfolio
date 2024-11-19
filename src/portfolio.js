// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Mathéo Portfolio",
  description:
    "Passionné qui s'efforce toujours de travailler sur des projets complets, allant de la conception à la mise en production, dans le but de développer des systèmes informatiques robustes et évolutifs.",
  og: {
    title: "Mathéo Girard Portfolio",
    type: "website",
  },
};

//Home Page
const greeting = {
  title: "Mathéo Girard",
  logo_name: "Mathéo Girard",
  subTitle:
    "Passionné qui s'efforce toujours de travailler sur des projets complets, allant de la conception à la mise en production, dans le but de développer des systèmes informatiques robustes et évolutifs.",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/GMafuo",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "Gmail",
    link: "mailto:matheogirard@hotmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Développeur informatique",
      fileName: "FullStackImg",
      skills: [
        "⚡ Étudiant en informatique en 1ère année de cycle ingénieur à l'UTBM.",
        "⚡ Développeur informatique polyvalent maîtrisant les aspects front-end et back-end.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Baccalauréat spécialités : Mathématiques et NSI",
      subtitle: "Lycée Marceau Chartres / Depuis juillet 2021",
      logo_path: "marceau_logo.png",
      alt_name: "Lycée Marceau Chartres",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ J'ai approfondi mes compétences en mathématiques et en NSI, me préparant ainsi aux exigences des classes supérieures.",
        "⚡ Intérêt croissant pour l'informatique, participation à des ateliers de programmation.",
      ],
      website_link: "http://lyc-marceau-chartres.tice.ac-orleans-tours.fr/eva/",
    },
    {
      title: "Bachelor Universitaire de Technologie (BUT)",
      subtitle: "Informatique IUT Belfort, France / Depuis septembre 2021",
      logo_path: "iut.png",
      alt_name: "IUT Belfort",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Formation approfondie en développement informatique.",
        "⚡ Projets pratiques en équipe, renforçant mes compétences en gestion de projet.",
        "⚡ Nombreux stages permettant une immersion réelle dans le monde professionnel.",
      ],
      website_link: "https://www.iut-nfc.univ-fcomte.fr",
    },
  ],
};

// Experience Page
const experience = {
  title: "Expériences",
  subtitle: "Stages et projets professionnels",
  description:
    "Grâce à mes différents stages, j'ai pu découvrir le monde professionnel et développer mes compétences. Ces expériences m'ont permis de travailler sur des projets concrets, de collaborer en équipe et d'appliquer mes connaissances théoriques. Chaque stage a été une opportunité d'apprendre et de grandir, me préparant efficacement à ma future carrière.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Stages",
      work: true,
      experiences: [
        {
          title:
            "Stagiaire Développeur pour le Service Départemental d'Incendie et de Secours (SDIS)",
          company: "Isara Technologies",
          company_url: "https://isaratechnologies.isaratech.com",
          logo_path: "Isara.png",
          duration: "Avril - Juin",
          location: "Belfort, France",
          description:
            "Développement d'une solution Kotlin pour automatiser l'extraction et l'analyse des rapports d'activité des pompiers. Intégration de données via webservices depuis la base SDIS vers Excel pour la génération de graphiques, puis vers Word (docx). Gestion de données manuelles via un fichier Excel séparé. Utilisation de bibliothèques spécialisées pour Excel et Word, améliorant l'évaluation des performances opérationnelles.",
          color: "#000000",
        },
        {
          title:
            "Stagiaire développeur pour le développement d'une application mobile d'apprentissage des langues",
          company: "OnlineFormaPro",
          company_url: "https://www.onlineformapro.com",
          logo_path: "onlineformapro.png",
          duration: "Mars 2024 - Mai 2024",
          location: "Vesoul, France",
          description:
            "Création d'une application mobile intégrant l'intelligence artificielle pour simuler une conversation fluide et réaliste avec une personne ordinaire, dans le but d'apprendre une nouvelle langue.",
          color: "#0879bf",
        },
        {
          title:
            "Stagiaire développeur pour le développement d'une GED (Gestion Électronique de Documents)",
          company: "UTBM",
          company_url: "https://www.utbm.fr",
          logo_path: "logo_utbm_seul.png",
          duration: "Juillet 2024 - Août 2024",
          location: "Belfort, France",
          description:
            "Développement d'une application web permettant la gestion de documents pour le service juridique de l'UTBM.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "Mes projets académiques présentés ci-dessous traitent de plusieurs domaines informatiques. Ils incluent divers projets de groupe que j'ai réalisés, qui m'ont permis de développer mes compétences informatiques tout au long de ces années.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Me contacter",
    profile_image_path: "photo_profil.png",
    description:
      "Vous pouvez me contacter sur presque tous les réseaux sociaux. Je réponds sous 24 heures.",
  },
  addressSection: {
    title: "Adresse",
    subtitle: "Rue Ernest Duvillard, Belfort, France 90000",
    locality: "Belfort",
    country: "France",
    region: "Bourgogne-Franche-Comté",
    postalCode: "90000",
    streetAddress: "Rue Ernest Duvillard",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.fr/maps/place/2+Rue+Ernest+Duvillard,+90000+Belfort/@47.6440887,6.8348765,17z/data=!3m1!4b1!4m6!3m5!1s0x47923b4b26daf643:0x4ab3155a0dc4b6d8!8m2!3d47.6440851!4d6.8374568!16s%2Fg%2F11twtbxqdl?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
