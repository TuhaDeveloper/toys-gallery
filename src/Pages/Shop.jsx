import React from 'react'
import Home from '../Components/Home/Home'
import Catagory from '../Components/Catagory/Catagory'
import Subscription from '../Components/Subscription/Subscription'
import UniqueCollection from '../Components/UniqueCollection/UniqueCollection'

const Shop = () => {
    return (
        <div>
            <Home />
            <Catagory title="CATEGORY" />
            <Subscription />
            <UniqueCollection />
        </div>
    )
}

export default Shop