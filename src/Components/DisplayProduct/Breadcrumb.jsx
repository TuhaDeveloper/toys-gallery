

import React from 'react'
import { useNavigate } from 'react-router-dom'
import './breadcrumb.css'

const Breadcrumb = ({ product }) => {
    const navegate = useNavigate()

    if (!product) {
        return <div>{navegate('/')}</div>
    }

    const { category, name } = product
    return (
        <div className='breadcrumb'>
            <p>{` Home > Figures > ${category} >  ${name}`}</p>
        </div>
    )
}

export default Breadcrumb
