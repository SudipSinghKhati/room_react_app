import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <div className='bgImage'>
                    {/* Add NavBar Here. */}
                <div>
                    <h1 className='bannerTextHeader'>Find your next roommate!</h1>
                    <p className='bannerText'>
                    New to Kathmandu,Bhaktapur,Lalitpur & Kritipur? Just moved cities? Looking for place with? You've come to the perfect place. RoomFinder is your true friend which helps you find your next room!
                    </p>
                </div>
                <a href='/finder'>
                    <button className='seeAllListingsButton'>See all postings</button>
                </a>
            </div>
   
        );
    }
}
 
export default Banner;