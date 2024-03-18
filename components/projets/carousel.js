import Slider from "react-slick";
import Image from "next/image";

const Carousel = props => {
  const gallerie = props.gallerie;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  console.log(gallerie);

  return (
    <Slider {...settings}>
      {gallerie.map(picture => (
        <Image className="picture_container" src={picture[1]} alt={picture[0]} objectFit="cover" layout="fill" />
      ))}
    </Slider>
  );
};
export default Carousel;
