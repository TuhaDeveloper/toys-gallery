import React from 'react'
import logo from '../Assets/Images/logo2.JPG'
import cart from '../Assets/Images/cart.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar">
                <div class="logo">
                    <Link to='/'>
                        <img src={logo} alt="Logo" />
                    </Link>
                    <span class="logo-text">Toys Gallery</span>
                </div>

                <ul class="nav-links">
                    <li><a href="/"><Link to='/'>Figures</Link></a></li>
                    <li><a href="/"><Link to='/games'>Games</Link></a></li>
                    <li><a href="/"><Link to='/outdoor'>Outdoor</Link></a></li>
                    <li><a href="/"><Link to='/indoor'>Indoor</Link></a></li>
                </ul>

                <div className='search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <form action="">
                        <input type="text" placeholder='Search your toys' />
                    </form>
                </div>

                <div class="right-side">
                    <Link className='login-btn' style={{ textDecoration: 'none' }} to='/SingUp'>Sing Up</Link>
                    <Link to='/cart' className='cart-icon'><img src={cart} alt="Cart" /></Link>
                    <div className='count'>0</div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar