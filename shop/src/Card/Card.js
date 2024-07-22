import React from 'react'
import './Card.css'
const Card = () => {
  return (
    <div>
        <div class="title">
            <h1>Blog</h1>
        </div>
        <section class="container">
            <div class ="card">
                <div class ="card-image car-1"></div>
                <h2>The Land of Lakes and Adventure</h2>
                <p>One of the most evocative and beautiful areas of the UK, famous for its pristine lakes, dramatic fells, lush valleys, and rich cultural heritage is</p>
            <a href='https://openweather.co.uk/blog/post/land-lakes-and-adventure'>READ MORE</a>
            </div>
            <div class ="card">
                <div class ="card-image car-2"></div>
                <h2>Poles Apart</h2>
                <p>Some of the most spectacular and beautiful, yet dangerous and inhospitable regions of our planet lie at its extremes - the North and South Poles.The lowest temperature ever officially </p>
                <a href='https://openweather.co.uk/blog/post/poles-apart'>READ MORE</a>
            </div>
            <div class ="card">
                <div class ="card-image car-3"></div>
                <h2>The Weather of Fog</h2>
                <p>Fog is a cloud that touches the ground, and appears when water vapor condenses, forming small droplets of liquid water, or sometimes ice crystals that can hang in the air. </p>
                <a href='https://openweather.co.uk/blog/post/weather-fog'>READ MORE</a>
            </div>
            <div class ="card">
                <div class ="card-image car-4"></div>
                <h2>The Urban Chill</h2>
                <p>In our latest blog post we will explore the creative approaches that some of the world’s cities are using to build resilient and pleasant environments for people (and perhaps horses) to live. </p>
                <a href='https://openweather.co.uk/blog/post/urban-chill'>READ MORE</a>
            </div>
            <div class ="card">
                <div class ="card-image car-5"></div>
                <h2>The weather at zero degrees</h2>
                <p>When temperatures drop to zero degrees, water takes on a seemingly mystical transition from its liquid to solid state. This solid has shaped and molded our planet and our lives</p>
                <a href='https://openweather.co.uk/blog/post/weather-zero-degrees'>READ MORE</a>
            </div>
            <div class ="card">
                <div class ="card-image car-6"></div>
                <h2>Singing in the Rain</h2>
                <p>Rain often is derided as being unpleasant and inconvenient. It is seen as the weather that causes those fun outside events to be canceled, plans need to be changed, and umbrellas found</p>
                <a href='https://openweather.co.uk/blog/post/singing-rain'>READ MORE</a>
            </div>
        </section>
    </div>
  )
}

export default Card