import React from 'react'

import './addcartitem.css'
import toys18 from '../Assets/Images/allproductimg/download9.jpeg'

const AddCartItem = () => {


    return (
        <div>
            <div className="cart-item">
                <img src={toys18} alt="" />
                <p>Chines artifitial Product</p>
                <p>$0</p>
                <p>0</p>
                <p>$0</p>
                <button>X</button>
            </div>
        </div>
    )
}

export default AddCartItem