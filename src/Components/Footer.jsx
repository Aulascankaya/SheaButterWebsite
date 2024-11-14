/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";


export const Footer = (/*{lang}*/) => {
  const lang = useSelector((state) => state.language);
  const { contactHeader, contactEmail, whatsApp, facebook, instagram, links,tiktok } =
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
            className="text-mail-red dark:text-lilac text-left mb-16 lg:mb-0 mr-auto hover:text-hover-yellow"
            href={`mailto:${contactEmail}`}
          >
            📨 <span className="underline">{contactEmail}</span>
          </a>
          <nav className="flex items-center space-x-4 lg:space-x-8 ml-auto">
          
            <a
              href={links.whatsApp}
              className="text-whatsapp-green dark:text-dark-mode-hire hover:text-hover-yellow"
            >
              {whatsApp}
            </a>
            <a
              href={links.facebook}
              className="text-facebook-blue dark:text-dark-mode-green hover:text-hover-yellow"
              target="_blank"
            >
              {facebook}
            </a>
            <a
              href={links.instagram}
              className="text-instagram-orange dark:dark-mode-linkedin hover:text-hover-yellow"
              target="_blank"
            >
              {instagram}
            </a>
            <a
              href={links.tiktok}
              className="text-tiktok-pink dark:text-dark-mode-hire hover:text-hover-yellow"
            >
              {tiktok}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
