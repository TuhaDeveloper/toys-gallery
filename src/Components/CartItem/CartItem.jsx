import React from 'react'
import './CartItem.css'
import AddCartItem from '../AddcartItem/AddCartItem'

const CartItem = () => {
    return (
        <div className='cartItems'>
            <div className="add-cart-product">
                <div className="cart-title">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quentity</p>
                    <p>Total</p>
                    <p>Remove</p>

                </div>

                <AddCartItem />

            </div>
            <hr />

            <div className="cart-footer">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div className='subtotal'>
                        <p>subTotal</p>
                        <p>$0</p>
                    </div>
                    <div className='shopingfee'>
                        <p>Shoping Fee</p>
                        <p>Fee</p>
                    </div>
                    <div className='subtotal'>
                        <p>Total</p>
                        <p>$0</p>
                    </div>
                    <button className='process'>PROCESS TO CHECKOUT</button>
                </div>
                <div className="submit-pomocode">
                    <p>if you have a promo cood Enter it here</p>
                    <div className="pomodcode">
                        <input type="text" placeholder='pomo code' />
                        <button className='pomo-submit'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItem