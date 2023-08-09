import React, { Component } from 'react';
import './Motto.css';

class MottoText extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <p className='textHeader'> Our Motto </p>
                <p className='textContent'>RoomFinder is inspired by a real life issue that the founders faced when they first moved to Kathmandu from different parts of the world. At RoomFinder, we want to make sure that moving to a new place is as seamless and easy as possible. RoomFinder is the one stop solution to accelerate your ideal room search.</p>
            </div>

         );
    }
}
 
export default MottoText;