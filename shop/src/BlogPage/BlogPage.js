import React from 'react';
import './BlogPage.css';
const BlogPage = () => {
  return (
    <div > 
      <div>
      <h1>BLOG</h1>
      </div>
      <div class="blog-wrapper">
      <div class="blog-card">
      <div class="card-img"> 
        <img src="https://openweather.co.uk/storage/app/media/ow_chill_1.jpg"/>
          </div>
          <div class="card-details">
           <h3>The Urban Chill</h3> 
           </div>
          <p>In our latest blog post we will explore the creative approaches that some of the world’s cities are using to build resilient and pleasant environments for people (and perhaps horses) to live. </p>
          <a href='https://openweather.co.uk/blog/post/urban-chill' target='_blank'>READ MORE</a>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://wallpapercave.com/wp/wp4009371.jpg"  />
          </div>
          <div class="card-details">
            <h3>The Weather of Fog</h3>
            </div>
            <p>Fog is a cloud that touches the ground, and appears when water vapor condenses, forming small droplets of liquid water, or sometimes ice crystals that can hang in the air.</p>
         <a href='https://openweather.co.uk/blog/post/weather-fog'target='_blank'>READ MORE</a>
         <br></br>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/ow_poles_1.jpg" />
          </div>
          <div class="card-details">
            <h3>Poles Apart</h3>
          </div>
          <p>Some of the most spectacular and beautiful, yet dangerous and inhospitable regions of our planet lie at its extremes - the North and South Poles. The lowest temperature ever officially</p>
          <a href='https://openweather.co.uk/blog/post/poles-apart'target='_blank'>READ MORE</a>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/ow_lakes_1.jpg"/>
          </div>
          <div class="card-details">
            <h3>The Land of Lakes and Adventure</h3>
          </div>
          <p>One of the most evocative and beautiful areas of the UK, famous for its pristine lakes, 
            dramatic fells, lush valleys, and rich cultural heritage is nestled in the Northwestern English</p>
          <a href='https://openweather.co.uk/blog/post/land-lakes-and-adventure'target='_blank'>READ MORE</a>
        </div>
        <br></br>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/ow_rain_1.jpg"/>
          </div>
          <div class="card-details">
           <h3>Singing in the Rain</h3>
          </div>
          <p>Rain often is derided as being unpleasant and inconvenient. It is seen as the weather that causes those fun outside events to be canceled, plans need to be changed, and umbrellas</p>
          <a href='https://openweather.co.uk/blog/post/singing-rain'target='_blank'>READ MORE</a>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/ow_smile1.jpg"/>
          </div>
          <div class="card-details">
            <h3>Can the weather actually smile?</h3>
          </div>
          <p>This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those</p>
          <a href='https://openweather.co.uk/blog/post/can-weather-actually-smile'target='_blank'>READ MORE</a>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/ow_farming_sun_1.jpg"/>
          </div>
          <div class="card-details">
           <h3>Farming the Sun </h3>
          </div>
          <p>The old phrase “make hay while the sun shines” may take on a new meaning with the increased use of agricultural land for solar farming. In our previous article,</p>
          <a href="https://openweather.co.uk/blog/post/farming-sun"target='_blank'>READ MORE</a>
        <br></br>
        </div>
        <div class="blog-card">
          <div class="card-img">
            <img src="https://openweather.co.uk/storage/app/media/new-feels-temperature-v-openweather-weather-api.png"/>
          </div>
          <div class="card-details">
           <h3>‘Feels like’ temperature</h3>
                  </div>
          <p>We have added “Feels like” parameter.  This parameter accounts for the human perception of weather; it lets you know how the temperature “feels”....</p>
          <a href="https://openweather.co.uk/blog/post/new-feels-temperature-openweather-apis"target='_blank'>READ MORE</a>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;


