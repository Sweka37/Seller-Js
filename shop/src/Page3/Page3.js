import React from 'react';
import './Page3.css';

const Page3 = () => {
  return (
    <div className="main-container"> 
      <center className="content-center"> 
        <h1 className="blogs">Poles Apart</h1>
        <img src="https://openweather.co.uk/storage/app/media/ow_poles_1.jpg" alt="poles apart" width="800px" height="300px" /> {/* Added alt text */}
      </center>
      <div className="article-content"> 
        <p className='main'>
        Some of the most spectacular and beautiful, yet dangerous and inhospitable regions of our planet lie at its extremes - the North and South Poles. The lowest temperature ever officially recorded on the Earth’s surface was −89.2°C at Vostok station, Antarctica on the 21st July 1983. To put this into perspective, it is 24C warmer than the average temperature of the surface of Mars. 
        </p>
        <h3 className="title">Life at the Poles</h3>
        <center>
        <img src="https://openweather.co.uk/storage/app/media/uploaded-files/ow_poles_3.jpg" width="700px" height="400px"/>
        </center>
        <p>
        There is a stark difference between the human populations at the Artic and Antartic. The North is home to numerous native populations, including the Inuits of North America, the Sami of Northern Europe and the Yakuts at the edge of Siberia. These populations tend to avoid the true North Pole, due to the availability of drinking water. Early Arctic explorers experienced challenges keeping themselves sufficiently hydrated for such hard, physical expeditions. 
Conversely, inaccessible prior to the modern era, Antarctica remained untouched by human presence until 1821. Today still, this southern continent does not have any permanent inhabitants, just scientific teams that rotate on a regular basis.
</p>
        <h3 className="title">The Weather</h3>
    
        <p>The Antarctic experiences some of the most varied temperatures for any continent. Average temperatures range from a relatively balmy -10C at coastal areas, down to -60C at certain high points of the interior. 

As we examined with our previous article, atmospheric pressure variations can have a dramatic impact on the wind. Antarctica experiences a belt of low atmospheric pressure around its exterior, known as the ‘circumpolar trough’ and an area of high pressure in the center. 
<br></br>This phenomenon helps create strong and consistent Katabatic winds.
Precipitation, as could be expected, is normally in the form of snow and ice crystals. Due to subsiding air in the interior, very little cloud forms. However the moisture dense air of coastal areas creates snow fall, especially on the Antarctic Peninsula. Loose snow that is picked up by the wind can gather against objects and other snow. Gathering of snow below eye level is known as drifting snow, normally when the wind speed is less than 30 kph, and above eye level is blowing snow when the wind exceeds 30 kph   
<br></br>
Blizzards occur when high winds blow snow for over an hour, with temperatures of less than 0C, and visibility of less than 100m. These conditions can be highly disruptive to almost all activities, and can sometimes last for days.
Whiteouts can also be extremely disruptive, but unlike blizzards, are an optical phenomenon rather than purely physical. These occur when there are large expanses of featureless snow, combined with an unbroken and overcast sky. These uniform light conditions can make it impossible to distinguish shadows, landmarks or the horizon.</p>
      </div>
    </div>
  );
};

export default Page3