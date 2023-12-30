import React from 'react'
import './Catagory.css'
import allData from '../Assets/toys.js'
import Item from '../Item/Item'
const Catagory = (props) => {
    return (
        <div className='catagory'>
            <h1>{props.title}</h1>
            <hr />
            <div className="allcatagory">
                {
                    allData.map((item) => {
                        return <Item id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} rating={item.rating} />
                    })
                }
            </div>
        </div>
    )
}

export default Catagory