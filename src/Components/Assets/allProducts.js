import { v4 as uuid } from "uuid";

import toys1 from './Images/allproductimg/download1.jpeg'
import toys2 from './Images/allproductimg/download2.jpeg'
import toys3 from './Images/allproductimg/download3.jpeg'
import toys4 from './Images/allproductimg/download4.jpeg'
import toys5 from './Images/allproductimg/download5.jpeg'
import toys6 from './Images/allproductimg/download6.jpeg'
import toys9 from './Images/allproductimg/download7.jpeg'
import toys7 from './Images/allproductimg/download8.jpeg'
import toys8 from './Images/allproductimg/download9.jpeg'
import toys10 from './Images/allproductimg/download10.jpeg'
import toys11 from './Images/allproductimg/download11.jpeg'
// import toys12 from './Images/allproductimg/download12.jpeg'
import toys13 from './Images/allproductimg/download13.jpeg'
import toys14 from './Images/allproductimg/download14.jpeg'
import toys15 from './Images/allproductimg/download15.jpeg'
import toys16 from './Images/allproductimg/download17.jpeg'
import toys17 from './Images/allproductimg/download18.jpeg'
import toys18 from './Images/allproductimg/download19.jpeg'
import toys19 from './Images/allproductimg/download20.jpeg'
import toys20 from './Images/allproductimg/download21.jpeg'
import toys21 from './Images/allproductimg/download22.jpeg'
import toys22 from './Images/allproductimg/download23.jpeg'
import toys23 from './Images/allproductimg/download24.jpeg'
import toys24 from './Images/allproductimg/download25.jpeg'
import toys25 from './Images/allproductimg/images1.jpeg'
import toys26 from './Images/allproductimg/images2.jpeg'
import toys27 from './Images/allproductimg/images3.jpeg'
// import toys28 from './Images/allproductimg/images4.jpeg'
import toys29 from './Images/allproductimg/images5.jpeg'
import toys30 from './Images/allproductimg/images6.jpeg'
import toys31 from './Images/allproductimg/images7.jpeg'



const allProducts = [
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'games',
        image: toys1,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals doll',
        id: uuid(),
        category: 'games',
        image: toys2,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines artifitial toys',
        id: uuid(),
        category: 'games',
        image: toys3,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals airplane',
        id: uuid(),
        category: 'games',
        image: toys4,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'japanise electricals bike',
        id: uuid(),
        category: 'games',
        image: toys5,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'japanise auto plane',
        id: uuid(),
        category: 'games',
        image: toys6,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'Korean artifial girs',
        id: uuid(),
        category: 'games',
        image: toys7,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines toys',
        id: uuid(),
        category: 'games',
        image: toys8,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines toys for kids',
        id: uuid(),
        category: 'games',
        image: toys9,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'indian bikes for kids',
        id: uuid(),
        category: 'games',
        image: toys10,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys11,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys11,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys13,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys14,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys15,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys16,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys17,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys18,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys19,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'outdoor',
        image: toys20,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys21,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys22,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys23,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys24,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys25,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys26,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys27,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys29,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys30,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys31,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'indoor',
        image: toys5,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    }
]


export default allProducts
