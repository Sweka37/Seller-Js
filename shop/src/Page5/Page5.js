import React from 'react';
import './Page2.css';

const Page2 = () => {
  return (
    <div className="main-container"> 
      <center className="content-center"> 
        <h1 className="blogs">The Weather Fog</h1>
        <img src="https://openweather.co.uk/storage/app/media/ow_fog_1.jpg" alt="The Weather Fog" width="800px" height="300px" /> {/* Added alt text */}
      </center>
      <div className="article-content"> 
        <p className='main'>
        Fog is a cloud that touches the ground, and appears when water vapor condenses, forming small droplets of liquid water, or sometimes ice crystals that can hang in the air. Fog is visible due to the water droplets, and water vapor, being a gas, is invisible.
        For fog to form, there needs to be some element of air pollution, or airborne microscopic particles for the water vapor to condense around. Sea fog is formed around areas of salty water, when the water vapor condenses around pieces of salt.
        Fog is normally dependent on the relative humidity, often forming when it approaches 100% and when the ambient air temperature falls - although these conditions do not always guarantee a fog of Shakespearian quality. Certain conditions cause fog to appear and disappear very quickly, known as a flash fog.
        </p>
        <h3>Fog Catchers</h3>
        <center>
        <img src="https://openweather.co.uk/storage/app/media/uploaded-files/1707391677712.jpeg" width="700px" height="400px"/>
        </center>
        <p className='main'>
        There has been a tradition in some ancient cultures to obtain water from fog by placing large vessels below plants to collect water. Today, water is harvested from fog in certain arid areas using large screens that work in a similar way to the plants. These fog catchers can collect over a hundred gallons of water as the fog droplets are caught in the fabric of the screen. Some villages in Peru that have limited access to water from other sources use these fog catchers to supply water for irrigation and drinking.
        </p>
        <h3 className='title'>Fog and Wine</h3>
        <center>
        <img src="https://openweather.co.uk/storage/app/media/uploaded-files/ow_fog_3.jpg" width="700px" height="400px"/>
        </center>
        <p className='main'> 
        In Italy's largest wine-growing region, Piedmont, the major growing hills of Langhe and Monferrato are frequently shrouded in thick blankets of fog. So notorious is the fog that one of its major wines is named after the Italian word for fog, 'nebbia'. Nebbiolo grapes ripen later in the year and are generally not harvested until late October, by which time fog is a frequent visitor creating spectacular vineyard vistas and a world-class wine.
Fog is also reputed to be of benefit to grapes such as Pinot Noir in California, where the foggy climate encourages the retention of a slight acidity in the grape, adding to the overall vibrancy of the final wine. 
       <br></br> 
       Over the years, fog has caused some of the most severe road incidents, including the 200 vehicle pile-up near Luton in 1974, and a 130 vehicle crash on the Sheppey crossing in Kent in 2013. Even with modern technology, fog is a notorious weather phenomena that normal car camera safety systems have difficulty in seeing through. The Lidar systems that the new self-driving car technologies often rely on have difficulty in seeing through fog</p>
        </div>
    </div>
  );
};

export default Page2