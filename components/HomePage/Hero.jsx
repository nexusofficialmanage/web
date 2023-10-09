import React from 'react'
import './Hero.css'
import DeliveryLocation from './DeliveryLocation'

const Hero = () => {
    
    const getStarted = () => {
        console.log('get started')
    }

    return (
        <div className='heading-title'>

            <div className='hero-section-text'>
                <h1 className='tag-line'>Premium <span className='tagline-span-1'>quality</span>
                <br/>Products at your <span className='tagline-span-2'><br/>
                finger tips
                </span>
                </h1>

                <p className='hero-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="location-start">
                    <DeliveryLocation/>
                    <button className='get-started-btn' onClick={getStarted}>Get Started</button>
                </div>
                

                <p className='cities-heading'>
                    popular cities in India
                </p>

                <div className='cities'>
                    <span>Delhi</span>
                    <span className='odd'>Mumbai</span>
                    <span>Chennai</span>
                    <span className='odd'>Bangalore</span>
                    <span>Hyderabad</span>
                    <span className='odd'>Kolkata</span>
                </div>
            </div>
            
            <div className='hero-section-img'>
                <img src="/assests/images/trolley.png" width="75%" height="90%" alt="" />
                <img src="/assests/images/trolley.png" width="60%" height="75%" alt="" />
                <img src="/assests/images/trolley.png" width="35%" height="50%" alt="" />
            </div>
            
        </div>
    )
}

export default Hero