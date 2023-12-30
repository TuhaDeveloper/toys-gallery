

import React from 'react'
import './unique.css'
import UniqueToys from '../Assets/UniqueToys'
import Item from '../Item/Item'

const UniqueCollection = () => {
    return (
        <div className='unique-collection'>
            <h1>Unique Collection</h1>
            <hr />
            <div className='uniqueToys'>
                {
                    UniqueToys.map((item) => {
                        return <Item id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} rating={item.rating} />
                    })
                }
            </div>
        </div>
    )
}

export default UniqueCollection
