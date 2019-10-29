import React from 'react';
import Slider from 'react-slick';

interface IHomeProps {
  images: Array<{
    caption: string;
    credits: string;
    src: string;
  }>;
}

const Home: React.FC<IHomeProps> = ({ images }) => (
  <Slider
    dots={true}
    infinite={true}
    speed={500}
    slidesToShow={1}
  >
    {images.map(image =>
      <div key={image.src} className="App-main-carousel-frame">
        <div style={{backgroundImage: `url(${image.src})`}} />
      </div>
    )}
  </Slider>
);

export default Home;
