import colorGame from "../imgs/color-game.png";
import countryApi from "../imgs/country-api.png";
import rpsGame from "../imgs/rps-game.png";
import tipCalculator from "../imgs/tip-calculator.png";
import meetthere from "../imgs/meet-there.png";

export const projects = [
  {
    id: 1,
    title: "Meet There",
    subtitle: "Online platform for event enthusiasts and organizers.",
    stack: "Django, Python",
    imgSrc: meetthere,
    link: "https://meet-there-site.onrender.com/",
  },
  {
    id: 2,
    title: "Color Game",
    subtitle:
      "Engaging game to exercise attention to detail and color perception.",
    stack: "JS",
    imgSrc: colorGame,
    link: "https://hackaton-project-six.vercel.app/",
  },
  {
    id: 3,
    title: "Tip Calculator",
    subtitle: "Helps calculate the appropriate tip amount for a given menu.",
    stack: "JS",
    imgSrc: tipCalculator,
    link: "https://tip-calculator-app-seven-beta.vercel.app/",
  },
  {
    id: 4,
    title: "Country API",
    subtitle: "Empowers users to access data about any country through APIs.",
    stack: "React",
    imgSrc: countryApi,
    link: "https://rest-countries-api-rosy.vercel.app/",
  },
  {
    id: 5,
    title: "Rock Paper Scissors Game",
    subtitle:
      "Digital implementation of the classic game with an exciting twist.",
    stack: "React",
    imgSrc: rpsGame,
    link: "https://rock-paper-scissors-lizard-spock-game-psi.vercel.app/",
  },
];
