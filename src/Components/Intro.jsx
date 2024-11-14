/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import profil from "../assets/butter1.jpg";

export const Intro = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const lang = useSelector((state) => state.language); 
  
  const {
    name,
    heading1,
    heading2,
    description,
  } = lang.introduction;

  // Scroll ile smooth geçiş
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-4 max-w-[80%] xl:max-w-6xl m-auto py-16 place-content-between">
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
      
      {/*İntro fotoğraf ve Buton */}
      <div className="relative group">
        <img
          className="rounded-2xl mt-4 lg:mt-0 max-w-[476px] max-h-[375px] shadow-2xl dark:shadow-lg dark:shadow-dark-project-name"
          src={profil}
          alt="Profile"
         
        />
        <a
          href="https://wa.me/905123456789"  // WhatsApp numarasını buraya ekleyin
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-4 py-2 border border-navy-blue rounded-md text-navy-blue dark:bg-white hover:shadow-md hover:shadow-dark-project-name opacity-0 group-hover:opacity-100 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jetzt Kaufen
        </a>
      </div>
    </div>
  );
};
