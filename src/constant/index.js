import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discord,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  out,
  plusSquare,
  searchMd,
  telegram,
  twitter,
  google,
  openai,
  tesla
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Features",
    url: "",
  },
  {
    id: "2",
    title: "Pricing",
    url: "",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "",
  },
  {
    id: "4",
    title: "How to use",
    url: "",
  },
  {
    id: "5",
    title: "Telegram",
    url: "",
    isOnlyMobile: true,
    icon: out,
  },
  {
    id: "6",
    title: "Twitter",
    url: "",
    isOnlyMobile: true,
    icon: out,
  },
  {
    id: "7",
    title: "Discord",
    url: "",
    isOnlyMobile: true,
    icon: out,
  },
];

export const navigationSosmed = [
  {
    id: "1",
    url: telegram,
    title: "telegram",
  },
  {
    id: "2",
    url: twitter,
    title: "twitter",
  },
  {
    id: "3",
    url: discord,
    title: "discord",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [google, openai, tesla, discord, twitter];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];