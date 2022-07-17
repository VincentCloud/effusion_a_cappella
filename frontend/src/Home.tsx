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
    autoplay
    autoplaySpeed={6000}
    pauseOnHover={false}
    fade
    dots={true}
    infinite={true}
    speed={800}
    slidesToShow={1}
  >
    {images.map(image =>
      <div key={image.src} className="App-main-carousel-frame">
        <div
          className="App-main-carousel-image"
          style={{backgroundImage: `url(${image.src})`}}
        />
        <div className="App-main-carousel-caption">
          <p>
            {image.caption}
            <br />
            <small>Photo credits: {image.credits}</small>
          </p>
        </div>
      </div>
    )}
  </Slider>
);

export default Home;
