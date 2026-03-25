import React from 'react'
import { Card } from '../Components/Card'
const products = [
	{
		id: 1,
		title: "Wireless Earbuds",
		description:
			"Crystal clear sound with active noise cancellation and 24-hour battery life.",
		price: "$129.00",
	},
	{
		id: 2,
		title: "Smart Watch Series 5",
		description:
			"Track your workouts, heart rate, and sleep with this sleek, waterproof wearable.",
		price: "$249.50",
	},
	{
		id: 3,
		title: "Mechanical Keyboard",
		description:
			"RGB backlit keys with tactile switches for the ultimate typing and gaming experience.",
		price: "$89.99",
	},
];
//Tailwindcss Grid///
export const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {products.map((product)=>(
        <card title={product.title} description={product.description} price={product.price}/>
		
		

      ))}
    </div>
  )
}

