import React from 'react'
import { useNavigate } from 'react-router-dom'
import './displayproduct.css'

const Displayproduct = ({ product }) => {
    const navegate = useNavigate()

    if (!product) {
        return <div>{navegate('/')}</div>
    }


    const { name, rating, new_price, old_price, image, id } = product

    const handleAddCart = () => {
        // { navegate('/cart') }

    }


    return (
        <div>
            <div className="display_product">
                <div className="left-display">
                    <div className="image-list">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                    <div className="main-image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="right-display">
                    <h1>{name}</h1>
                    <div className='rating'>
                        <p>⭐⭐⭐⭐</p>
                        <p>{`(${rating})`}</p>
                    </div>
                    <div className="prices">
                        <p>{new_price}</p>
                        <p className='old-price'>{old_price}</p>
                    </div>
                    <p>Toys products encompass a diverse range of playthings designed
                        for entertainment, education, and imaginative engagement, catering
                        to children's varied interests and developmental stages.
                    </p>
                    <h2>Select Size</h2>
                    <div className="size">
                        <li>M</li>
                        <li>L</li>
                        <li>XX</li>
                        <li>XXL</li>
                    </div>
                    <div className="addcart">
                        <button onClick={(e) => { handleAddCart(name, new_price, image, id) }}>Add to cart</button>
                    </div>
                    <p>Category : Best kids toys </p>
                    <p>Tags : Leatest Product</p>
                </div>
            </div>
        </div>
    )
}

export default Displayproduct