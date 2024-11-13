/* eslint-disable react/prop-types */

import githubLight from "../assets/github.svg";
import LinkedInLight from "../assets/LinkedIn.svg";
import githubDark from "../assets/githubDark.svg";
import LinkedInDark from "../assets/LinkedInDark.svg";
import profil from "../assets/butter1.jpg"


import { useSelector } from "react-redux";

export const Intro = (/*{lang}*/) => {
  const darkMode = useSelector((state) => state.darkMode);
  const lang = useSelector((state) => state.language);

  const {
    name,
    heading1,
    heading2,
    description,
    hireMe,
    github,
    linkedin,
    links,
  } = lang.introduction;

 // Scroll ile smooth geçiş
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-6 max-w-[80%] xl:max-w-6xl m-auto py-16 place-content-between">
      {/*İntro bilgiler */}
      <div className="text-left">
        <p className="mb-8 text-dark-purple dark:text-dark-mode-name">
          ————— {name}
        </p>
        <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">
          {heading1}
        </h1>
        <h1 className="font-bold text-black-heading dark:text-bluish-gray lg:text-6xl">
          {heading2}
        </h1>
        <p className="mt-8 text-gray text-wrap dark:text-white lg:max-w-lg">
          {description}
        </p>
        
      </div>
      {/*İntro fotoğraf */}
      <img
        className="rounded-2xl mt-8 lg:mt-0 max-w-[476px] max-h-[375px] shadow-2xl  dark:shadow-lg dark:shadow-dark-project-name"
        src={profil}
        alt="Profile Photo "
      />
    </div>
  );
};
