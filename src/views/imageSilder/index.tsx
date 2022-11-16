import { staticData } from "data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,
    centerMode: true,
    variableWidth: true,
    pauseOnHover: true,
  };

  const renderSlides = () =>
    staticData.map((item: any, index: number) => (
      <ImgWrapper key={index}>
        <SliderImg src={item.ImageUrl} alt="img" />
      </ImgWrapper>
    ));

  return (
    <MainWrapper>
      <Slider {...settings}>{renderSlides()}</Slider>
    </MainWrapper>
  );
};
export default ImageSlider;

//styles
const MainWrapper = styled.div`
  padding: 10vw 3vw 0 3vw;
`;
const ImgWrapper = styled.div``;
const SliderImg = styled.img`
  width: 100%;
  max-width: 100vw;
  height: 25vw;
`;
