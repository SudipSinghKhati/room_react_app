import React, { Component } from 'react';
import userPhoto1 from '../../../assets/potrait2.jpg';
import userPhoto2 from '../../../assets/potrait3.jpg';
import userPhoto3 from '../../../assets/potrait4.png';
import Review from './Review';
import './Review.css';



// We need to get users from server using a callback function.

const users = [
    {
        userPhoto: userPhoto1,
        userName: 'Paras Ayer',
        location: 'Dhangadhi | Kathmandu',
        review: 'I moved to Kathmandu from Dhangadhi, and I can\'t imagine finding the perfect room so easily if it wasn\'t for RoomFinder.'  
    },
    {
        userPhoto: userPhoto2,
        userName: 'Prashant Deshar',
        location: 'Chapagaun | Bhaktapur',
        review: 'Finding rooms was never this easy! I love this website. Especially being a university student, it helped me a lot.'
    },
    {
        userPhoto: userPhoto3,
        userName: 'Krishna Thakur',
        location: 'Siraha | Kathmandu',
        review: 'Found my room! These guys are the best! I\'m a working professional, and I move a lot. Thanks RoomFinder. '
    }
]


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='ReviewBox'>
                <Review userInfo={users[0]} />
                <Review userInfo={users[1]} />
                <Review userInfo={users[2]} />
            </div>


         );
    }
}
 
export default Reviews;