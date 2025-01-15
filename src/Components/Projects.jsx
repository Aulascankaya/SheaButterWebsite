import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Projects = () => {
  const lang = useSelector((state) => state.language);
  const { title, items } = lang.projects;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
      id="projects"
      className="text-left  m-auto place-content-between"
    >
     {/*<h2 className="font-bold text-black-heading dark:text-bluish-gray text-4xl mb-8">
        {title}
      </h2> */} 
      <Slider {...settings} className="text-light-mode">
        {items?.map((project, index) => (
          <div key={index} className="pb-8 lg:pb-16">
            <div className="relative w-full h-96 m-auto">
              <img src={`./${project.image}`} alt={project.title} className="rounded-md w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
