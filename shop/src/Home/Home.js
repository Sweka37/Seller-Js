import React from 'react';
import Slider from 'react-slick';
import './Home.css';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="title">
        <h1>Blog</h1>
      </div>
      <Slider {...sliderSettings}>
        <div className="card">
        <div class ="card-image car-1"></div>
                <h2>The Land of Lakes and Adventure</h2>
                <p>One of the most evocative and beautiful areas of the UK, famous for its pristine lakes, dramatic fells, lush valleys, and rich cultural heritage is</p>
            <a href='https://openweather.co.uk/blog/post/land-lakes-and-adventure'>READ MORE</a>
        </div>
        <div className="card">
        <div class ="card-image car-1"></div>
                <h2>The Land of Lakes and Adventure</h2>
                <p>One of the most evocative and beautiful areas of the UK, famous for its pristine lakes, dramatic fells, lush valleys, and rich cultural heritage is</p>
            <a href='https://openweather.co.uk/blog/post/land-lakes-and-adventure'>READ MORE</a>
        </div>
        <div className="card">
        <div class ="card-image car-1"></div>
                <h2>The Land of Lakes and Adventure</h2>
                <p>One of the most evocative and beautiful areas of the UK, famous for its pristine lakes, dramatic fells, lush valleys, and rich cultural heritage is</p>
            <a href='https://openweather.co.uk/blog/post/land-lakes-and-adventure'>READ MORE</a>
        </div>
  
      </Slider>
    </div>
  );
}

export default Home;
