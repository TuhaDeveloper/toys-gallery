import React from 'react'
import './subs.css'
import { Link } from 'react-router-dom'
const Subscription = () => {
    return (
        <div className='subscription'>
            <div className="join">
                <p>Join with us to get black friday discount</p>
                <button><Link to='/fridaydiscount'>Join</Link></button>
                <p>Have a good day</p>
            </div>
        </div>
    )
}

export default Subscription