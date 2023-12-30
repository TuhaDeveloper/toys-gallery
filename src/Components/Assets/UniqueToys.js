
import { v4 as uuid } from "uuid"

import toys7 from '../Assets/Images/toys7.jpeg'
import toys8 from '../Assets/Images/toys8.jpeg'
import toys9 from '../Assets/Images/toys9.jpeg'
import toys10 from '../Assets/Images/toys10.jpeg'
import toys11 from '../Assets/Images/toys11.jpeg'
import toys12 from '../Assets/Images/toys12.jpeg'
import toys13 from '../Assets/Images/toys12.jpeg'
import toys14 from '../Assets/Images/toys13.jpeg'


const UniqueToys = [
    {
        name: 'chines electricals car',
        id: uuid(),
        category: 'games',
        image: toys7,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals doll',
        id: uuid(),
        category: 'games',
        image: toys8,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines artifitial toys',
        id: uuid(),
        category: 'games',
        image: toys9,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'chines electricals airplane',
        id: uuid(),
        category: 'games',
        image: toys10,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'japanise electricals bike',
        id: uuid(),
        category: 'games',
        image: toys11,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'japanise auto plane',
        id: uuid(),
        category: 'games',
        image: toys12,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
    {
        name: 'Korean artifial girs',
        id: uuid(),
        category: 'games',
        image: toys13,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    }, {
        name: 'Korean artifial girs',
        id: uuid(),
        category: 'games',
        image: toys14,
        new_price: `$${Math.floor(Math.random() * (140 - 60 + 1)) + 60}`,
        old_price: `$${Math.floor(Math.random() * (400 - 3000 + 1)) + 300}`,
        rating: Math.floor(Math.random() * (440 - 101 + 1)) + 101
    },
]

export default UniqueToys
