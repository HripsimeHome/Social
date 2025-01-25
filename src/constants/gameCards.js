import { videogame1Image, videogame2Image } from "../assets/images";

export const gameCards = [
  {
    id: 1,
    backgroundImage: `url(${videogame1Image})`,
    gameName: "Loftia VR Game",
    gameType: "video game",
    gamePosition: "top",
    // isInTop: true,
    progress: {
      bakers: 15,
      percent: 45,
      daysToGo: 15,
    },
  },

  {
    id: 2,
    backgroundImage: `url(${videogame2Image})`,
    gameName: "Design System Automation",
    gameType: "video game",
    gamePosition: "new",
    //isInTop: true,
    progress: {
      bakers: 20,
      percent: 15,
      daysToGo: 5,
    },
  },

  {
    id: 3,
    backgroundImage: `url(${videogame1Image})`,
    gameName: "Loftia VR Game",
    gameType: "video game",
    gamePosition: "popular",
    //isInTop: true,
    progress: {
      bakers: 55,
      percent: 55,
      daysToGo: 65,
    },
  },

  {
    id: 4,
    backgroundImage: `url(${videogame2Image})`,
    gameName: "Design System Automation",
    gameType: "video game",
    gamePosition: "new",
    progress: {
      bakers: 35,
      percent: 80,
      daysToGo: 5,
    },
  },

  {
    id: 5,
    backgroundImage: `url(${videogame1Image})`,
    gameName: "Loftia VR Game",
    gameType: "video game",
    gamePosition: "popular",
    progress: {
      bakers: 64,
      percent: 85,
      daysToGo: 35,
    },
  },

  {
    id: 6,
    backgroundImage: `url(${videogame2Image})`,
    gameName: "Design System Automation",
    gameType: "video game",
    gamePosition: "top",
    progress: {
      bakers: 9,
      percent: 20,
      daysToGo: 24,
    },
  },
];
