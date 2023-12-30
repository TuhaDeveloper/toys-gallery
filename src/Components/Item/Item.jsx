import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <div className="allItems">
            <div className='item'>
                <Link to={`/products/${props.id}`} onClick={(e) => { window.scrollTo(0, 0) }}>
                    <img src={props.image} alt="" />
                </Link>
                <p>{props.name}</p>
                <div className="prices">
                    <p>{props.new_price}</p>
                    <p>{props.old_price}</p>
                </div>
            </div>
        </div>
    )
}

export default Item