import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import home from '../Assets/Images/homefeed2.png'

const Home = () => {
    return (
        <div className='home'>
            <div className="left-div">
                <p>NEW ARRIVALS ONLY</p>
                <h1>New collections for Kids</h1>
                <Link to='/unique_collection' >Unique Collection</Link>
            </div>
            <div className="right-div">
                <img src={home} alt="home" />
            </div>
        </div>
    )
}

export default Home