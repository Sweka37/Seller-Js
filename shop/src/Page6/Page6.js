import React from 'react'
import './Page6.css'
const Page6 = () => {
  return (
<div className="main-container"> 
      <center className="content-center"> 
        <h1 className='blogs'>Singing in the Rain</h1>
        <img src="https://openweather.co.uk/storage/app/media/ow_rain_1.jpg" alt="singing in the rain" width="800px" height="300px" /> {/* Added alt text */}
      </center>
      <div className="article-content"> 
        <p className='main'>
        Rain often is derided as being unpleasant and inconvenient. It is seen as the weather that causes those fun outside events to be canceled, plans need to be changed, and umbrellas found. However, taking a slightly different viewpoint, rain can be seen as the most wonderful, exciting and varied of all forms of weather. It sustains life, cleans the air, and for many, raises our moods.
       </p>
        <h3 className='title'>Rain is not all water</h3>
        <p>
        Both natural and human activities produce rain that is made up of more than just water. Volcanoes often produce their own weather systems. The ash particles that are ejected from an active volcano attract water droplets causing increased rainfall. When combined with the volcanic sulfur compounds these rain storms contain high amounts of sulfur dioxide.
Acid rain is one of the consequences of air pollution caused by human activities. It also has a damaging effect on marble statues that actually dissolve when exposed to acid rain. The Taj Mahal in India, Colosseum of Rome, and the Leaning Tower of Pisa all have been affected by acid rain.
        </p>
        <h3 className='title'>Artificial Rain</h3>
        <center>
        <img src="https://openweather.co.uk/storage/app/media/uploaded-files/ow_rain_3.jpg" width="700px" height="400px"/>
        </center>
        <p>With increasing levels of drought, some countries have looked into a theoretical technology first developed in the 1940s. Cloud seeding involves using aircraft or drones to add small particles of silver iodide, which have a structure similar to ice, to clouds. Water droplets are attracted to the particles, modifying the structure of the clouds and increasing the chance of rain. The effectiveness of this technology has always been very difficult to measure due to the variability of clouds, and their transient and turbulent nature. 
<br></br> The denser atmosphere caused the rain to fall slower, influencing the size of the impressions the drops made when they stuck volcanic ash. The denser atmosphere, coupled with a weaker sun that emitted about 85% of today’s radiation would have meant that the ancient sky would have appeared significantly different, and far more hazy than the one that we are used to seeing today.</p>
       </div>
    </div>
  );
};
export default Page6