import {
  homePagePath,
  futuresPagePath,
  positionPagePath,
  crypto500PagePath,
  usdtPagePath,
} from "../router/path";

export const menuItems = [
  {
    link: homePagePath,
    text: "",
   // text: "All",
  },

  {
    link: "https://crypto-tg-bot.vercel.app",
    text: "Futures",
  },

  {
    link: "https://crypto-tg-bot.vercel.app/orders",
    text: "Position",
  },

  {
    link: "https://crypto-tg-bot.vercel.app/currencies",
    text: "Crypto 500",
  },

  {
    link: "https://crypto-tg-bot.vercel.app/profile",
    text: "0 USDT",
  },
  {
    link: homePagePath,
    text: "CROW"
  }
];
