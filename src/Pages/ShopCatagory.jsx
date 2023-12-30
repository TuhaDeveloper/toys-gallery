import React, { useContext } from 'react'
import { ShopContext } from '../Context/shopContext'
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'
import { FaLevelDownAlt } from 'react-icons/fa'
import './CSS/shopcatagory.css'

const ShopProject = (props) => {
    const allProducts = useContext(ShopContext)
    return (
        <div className='shopproject'>
            <div className="banner">
                <img src={props.image} alt="" />
            </div>
            <div className="short_index">
                <div className="left_short">
                    Short 10 item out of (102)
                </div>
                <div className="right_short">
                    <p>short by</p>
                    <FaLevelDownAlt />
                </div>
            </div>
            <div className='category-product'>
                {
                    allProducts.map((item, index) => {
                        if (props.category === item.category) {
                            return <Link to={`/products/${item.id}`} >
                                <Item id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price} rating={item.rating} />
                            </Link>
                        } else {
                            return null
                        }

                    })
                }
            </div>
        </div>
    )
}

export default ShopProject