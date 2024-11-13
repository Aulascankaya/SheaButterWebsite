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
      <Slider {...settings }>
        {items.map((skill, index) => (
          <div key={index} className="pb-8 lg:pb-16">
            <div className="flex items-center space-x-2  ">
            <img src={`./${skill.logo}`} alt={skill.logo} className="rounded-md w-80 h-92 mb-5" />
            
            </div>
            
          </div>
        ))}
      </Slider>
      <div className="h-[1px] bg-lilac mt-8 mb-8 lg:mb-16"></div>
    </div>
  );
};
