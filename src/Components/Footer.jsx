/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";


export const Footer = (/*{lang}*/) => {
  const lang = useSelector((state) => state.language);
  const { contactHeader, contactEmail, personalBlog, github, linkedin, links } =
    lang.footer;

  return (
    <footer id="footer" className="bg-gray-light dark:bg-dark-footer-bg w-full mt-8">
      <div className="max-w-[80%] xl:max-w-6xl m-auto py-16">
        <h2
          className={`font-bold text-black-heading dark:text-bluish-gray text-left text-4xl max-w-lg`}
        >
          {contactHeader}
        </h2>
        <div className="flex flex-col lg:flex-row pt-16 pb-8">
          <a
            className="text-mail-red dark:text-lilac text-left mb-16 lg:mb-0 mr-auto"
            href={`mailto:${contactEmail}`}
          >
            📨 <span className="underline">{contactEmail}</span>
          </a>
          <nav className="flex items-center space-x-4 lg:space-x-8 ml-auto">
            <a
              href={links.personalBlog}
              className="text-black-heading dark:text-dark-mode-hire"
            >
              {personalBlog}
            </a>
            <a
              href={links.github}
              className="text-green dark:text-dark-mode-green"
              target="_blank"
            >
              {github}
            </a>
            <a
              href={links.linkedin}
              className="text-linkedin-blue dark:dark-mode-linkedin"
              target="_blank"
            >
              {linkedin}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
