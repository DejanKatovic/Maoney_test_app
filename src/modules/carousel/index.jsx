import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
const flickityOptions = {
  initialIndex: 2,
};

export const Carousel = ({ children }) => {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {children}
    </Flickity>
  );
};
