import {
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
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "1",
    title: "Home",
    url: "",
  },
  {
    id: "2",
    title: "$NRC",
    url: "",
  },
  {
    id: "3",
    title: "Whitepaper",
    url: "",
  },
  {
    id: "4",
    title: "Roadmap",
    url: "",
  },
  {
    id: "5",
    title: "Telegram",
    url: "",
    isOnlyMobile: true,
    icon: out
  },
  {
    id: "6",
    title: "Twitter",
    url: "",
    isOnlyMobile: true,
    icon: out
  },
  {
    id: "7",
    title: "Discord",
    url: "",
    isOnlyMobile: true,
    icon: out
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

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo]