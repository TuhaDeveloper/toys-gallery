
import { v4 as uuid } from "uuid"


// import toys2 from '../Assets/Images/toys2.jpeg'
import toys3 from '../Assets/Images/toys3.jpeg'
// import toys4 from '../Assets/Images/toys4.jpeg'
import toys5 from '../Assets/Images/toys5.jpeg'

import toys2 from './Images/allproductimg/download2.jpeg'
// import toys3 from './Images/allproductimg/download3.jpeg'
import toys4 from './Images/allproductimg/download4.jpeg'
// import toys5 from './Images/allproductimg/download5.jpeg'
import toys6 from './Images/allproductimg/download6.jpeg'
import toys10 from './Images/allproductimg/download10.jpeg'
import toys9 from './Images/allproductimg/download7.jpeg'

let alldata = [
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'games',
        image: toys2,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals doll',
        id: uuid(),
        category: 'games',
        image: toys3,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines artifitial toys',
        id: uuid(),
        category: 'games',
        image: toys4,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals airplane',
        id: uuid(),
        category: 'games',
        image: toys5,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'japanise electricals bike',
        id: uuid(),
        category: 'games',
        image: toys6,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'games',
        image: toys9,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals doll',
        id: uuid(),
        category: 'games',
        image: toys10,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    // {
    //     "name": "Product 5",
    //     "price": 22.89,
    //     "rating": 4.0,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 6",
    //     "price": 35.0,
    //     "rating": 4.2,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 7",
    //     "price": 27.5,
    //     "rating": 3.5,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 8",
    //     "price": 44.99,
    //     "rating": 4.8,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 9",
    //     "price": 19.0,
    //     "rating": 4.3,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 10",
    //     "price": 30.75,
    //     "rating": 4.6,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 11",
    //     "price": 28.49,
    //     "rating": 3.9,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 12",
    //     "price": 35.0,
    //     "rating": 4.1,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 13",
    //     "price": 25.99,
    //     "rating": 4.4,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 14",
    //     "price": 42.5,
    //     "rating": 4.7,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 15",
    //     "price": 20.49,
    //     "rating": 3.7,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 16",
    //     "price": 38.0,
    //     "rating": 4.9,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 17",
    //     "price": 23.75,
    //     "rating": 4.2,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 18",
    //     "price": 47.99,
    //     "rating": 4.5,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 19",
    //     "price": 18.0,
    //     "rating": 3.6,
    //     "image": "https://via.placeholder.com/300"
    // },
    // {
    //     "name": "Product 20",
    //     "price": 33.25,
    //     "rating": 4.3,
    //     "image": "https://via.placeholder.com/300"
    // }
]

export default alldata