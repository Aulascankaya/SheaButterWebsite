/* eslint-disable react/prop-types */
import { dataTR } from "../Datas/tr";
import { dataEN } from "../Datas/en";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import logo from "../assets/shealogo.png";
import { dataDE } from "../Datas/de";
import tr from "../assets/tr.png";
import en from "../assets/en.png";
import de from "../assets/de.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/actions/languageActions";
import { toggleDarkMode } from "../store/actions/darkModeActions";

export const Header = (/*{ lang, setLang }*/) => {
  //const { darkMode, toggleDarkMode } = useDarkMode();
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  //dil değişim handle
  const handleClick = (language) => {
    dispatch(setLanguage(language));
    toast(language.notifications.success, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: darkMode === true ? "dark" : "light",
    });
  };

  //Scroll ile smooth geçiş
  const scrollToSection = (id) => {

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Redux öncesi handle
  /*const handleClickTR = () => {
    setLang(dataTR);
    toast(dataTR.notifications.success, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: darkMode === true ?"dark": "light",
    });
  };
  const handleClickEN = () => {
    setLang(dataEN);
    toast(dataEN.notifications.success, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: darkMode === true ?"dark": "light",
    });
  };
  const handleClickDE = () => {
    setLang(dataDE);
    toast(dataDE.notifications.success, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: darkMode === true ?"dark": "light",
    });
  };*/

  const { lightModeSwitch, darkModeSwitch, skills, projects, hireMe } =
    lang.header;

  return (
    <header className="flex flex-col max-w-[80%] xl:max-w-6xl m-auto justify-between">
      {/* DARKMODE*/}
      <div className="flex items-center space-x-2 ml-auto my-8">
        <div
          className="relative w-10 h-5 flex items-center cursor-pointer transition-colors duration-300 rounded-full bg-toggle-purple dark:bg-toggle-gray"
          onClick={() => dispatch(toggleDarkMode())}
        >


          <div
            className="w-4 h-4 cursor-pointer transition-transform duration-300 transform"
            style={{
              transform: darkMode ? "translateX(30%)" : "translateX(125%)",
            }}
          >
            {darkMode ? <img src={moon} /> : <img src={sun} />}
          </div>
        </div>

        <span className="dark:text-light-mode text-gray-dark font-medium tracking-wider">
          {darkMode ? lightModeSwitch : darkModeSwitch}
        </span>

        <span className="text-gray-dark">|</span>

         {/* DİL SEÇME*/}
        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider hover:shadow-md hover:shadow-dark-project-name"
          onClick={() => handleClick(dataTR)}
        >
          <img className="w-5 h-5" src={tr} />
        </a>
        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider hover:shadow-md hover:shadow-dark-project-name"
          onClick={() => handleClick(dataEN)}
        >
          <img className="w-5 h-5" src={en} />
        </a>
        <a
          href="#"
          className="dark:text-lilac text-toggle-purple font-medium tracking-wider hover:shadow-md hover:shadow-dark-project-name"
          onClick={() => handleClick(dataDE)}
        >
          <img className="w-5 h-5" src={de} />
        </a>
      </div>
         {/* NAVİGASYONLAR*/}
      <nav className="flex items-center">
        <div className="h-24 w-24 rounded-full flex items-center justify-center bg-logo-lilac dark:bg-toggle-purple mr-auto">
          <span className="dark:text-dark-logo-font text-logo-purple transform ">
            <img src={logo} alt="logo" />
          </span>
        </div>
        <nav className="flex items-center space-x-2 lg:space-x-16 ml-auto">
          <a onClick={() => scrollToSection("skills")} href="#" className="text-gray ">
            {skills}
          </a>
          <a onClick={() => scrollToSection("projects")} href="#" className="text-gray ">
            {projects}
          </a>
          <a
             onClick={() => scrollToSection("footer")}
            href="#"
            className="text-navy-blue px-4 py-2 border border-navy-blue rounded-md dark:bg-white hover:shadow-md hover:shadow-dark-project-name"
          >
            {hireMe}
          </a>
        </nav>
      </nav>
    </header>
  );
};
