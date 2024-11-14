import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* eslint-disable react/prop-types */
export const Skills = () => {
  const lang = useSelector((state) => state.language);
  const { items, title } = lang.skills;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 5000, // Set autoplay speed to 5 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      id="skills"
      className="text-left max-w-[80%] xl:max-w-6xl m-auto place-content-between"
    >
      <h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-4">
        {title /*SKILLS*/}
      </h2>

      {/* Skills haritalıyoruz */}
      <Slider {...settings}>
        {items.map((skill, index) => (
          <div key={index} className="pb-8 lg:pb-16">
            <div className="relative group flex flex-col items-center space-y-2">
              <div className="relative">
                <img src={skill.logo} alt={`Logo of ${skill.name}`} className="rounded-md w-64 h-64 object-cover mb-5" />
                <a
                  href="https://wa.me/905123456789"  // WhatsApp numarasını buraya ekleyin
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 border border-white rounded-md text-white bg-navy-blue bg-opacity-75 text-sm hover:shadow-md hover:shadow-dark-project-name opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jetzt Kaufen
                </a>
              </div>
              <div className="text-center z-0">
                <p className="text-lg font-semibold dark:text-white">{skill.price}</p>
                <p className="text-sm dark:text-white">{skill.details}</p>
                <p className="text-sm dark:text-white">{skill.size}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="h-[1px] bg-lilac mt-8 mb-8 lg:mb-16"></div>
    </div>
  ); 
};
