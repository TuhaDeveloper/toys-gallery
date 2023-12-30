import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/shopContext';
import Breadcrumb from '../Components/DisplayProduct/Breadcrumb';
import Displayproduct from '../Components/DisplayProduct/Displayproduct';
import alldata from '../Components/Assets/toys';
import UniqueToys from '../Components/Assets/UniqueToys';
import Catagory from '../Components/Catagory/Catagory';

const Products = () => {
    const allProducts = useContext(ShopContext)
    const { productId } = useParams()
    const product = allProducts.find((e) => e.id === productId) || UniqueToys.find((e) => e.id === productId) || alldata.find((e) => e.id === productId)

    return (
        <div>
            <Breadcrumb product={product} />
            <Displayproduct product={product} />
            <Catagory title="Related Product" />
        </div>
    )
}

export default Products