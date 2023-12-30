import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopProject from './Pages/ShopCatagory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSingUp from './Pages/LoginSingUp';
import UniqueCollection from './Components/UniqueCollection/UniqueCollection';
import Footer from './Components/Footer/Footer';
import gamebanner from './Components/Assets/Images/allproductimg/games_banner.jpeg'
import indoor_banner from './Components/Assets/Images/allproductimg/indoor_banner.jpeg'
import outdoor_banner from './Components/Assets/Images/allproductimg/outdoor_banner.jpeg'
import Login from './Pages/Login';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/games' element={<ShopProject image={gamebanner} category="games" />} />
        <Route path='/outdoor' element={<ShopProject image={outdoor_banner} category="outdoor" />} />
        <Route path='/indoor' element={<ShopProject image={indoor_banner} category="indoor" />} />
        <Route path='/products' element={<Products />}>
          <Route path=':productId' element={<Products />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/SingUp' element={<LoginSingUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/unique_collection' element={<UniqueCollection />} />

      </Routes>
      <Footer />

    </BrowserRouter>

  );
}

export default App;
