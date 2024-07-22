import React from 'react';
import './Page8.css';

const Page8 = () => {
  return (
    <div className="main-container"> 
      <center className="content-center"> 
        <h1 className='blogs'>‘Feels like’ temperature</h1>
        <img src="https://openweather.co.uk/storage/app/media/new-feels-temperature-v-openweather-weather-api.png" alt="the urban chill" width="800px" height="300px" /> {/* Added alt text */}
      </center>
      <div className="article-content"> 
        <p className='main'>
        we have added ‘Feels like’ parameter; at the moment, it runs in the beta mode. Simply put, this parameter accounts for the human perception of weather; it lets you know how the temperature ‘feels’.

Apart from air temperature itself, other factors (such as air humidity and wind speed) have a significant impact on our perception of heat and cold. In fact, at different temperature levels, this effect will also be different. For example, -5 °C in high humidity and strong wind conditions will be much less comfortable than -5 °C in a rather dry, calm weather. Assuming the force of the winds are equal, cooling effect will also be felt differently at a temperature of -5 °C and + 30 °C
        </p>
        <h3 className='title'>Climate</h3>
        <p>
        Technology also provides more complex, multi-faceted tools that integrate different data types. For instance, environmental sensors detecting pressure, moisture, rain, and temperature, can all be uploaded to platforms such as ThingSpeak, which can then adjust resource use on-site. This eliminates the need for human intervention, solely relying on sensors and web platforms.
However, even with the most accurate climate monitoring systems, the future remains bleak for the role of the environment in agricultural progress. Global climate change is disrupting seasonal patterns, exacerbating climate catastrophes, and intensifying the stress on agricultural stakeholders. This makes weather monitoring even more significant, as farmers will have to mitigate and adapt practices readily under mounting environmental pressure.
        </p>
        <h3 className='title'>Heat Index</h3>
        <center>
        <img src="https://tse1.mm.bing.net/th?id=OIP.-TtMYIHZmj99LDrWCSNvDwHaEK&pid=Api&P=0&h=180" width="700px" height="400px"/>
        </center>
        <p>Extreme cold poses significant risks to public health, making heating solutions a top priority for many cities. It faces particularly harsh winter conditions. To combat this, the city taps into its unique geothermal resources, utilizing natural hot springs to heat public spaces and even pedestrian walkways. This creative approach not only keeps residents warm but also underscores the city’s commitment to sustainability.
        <br></br>
        The city of Harbin in northeastern China has embraced its chilly climate by hosting an annual Ice Festival. During the festival, intricate ice sculptures illuminate the city, turning the harsh winter into a tourist attraction. By doing this, Harbin has turned its cold weather into an economic opportunity, showcasing how creativity can transform a potential challenge into a unique asset.</p>
      </div>
    </div>
  );
};

export default Page8