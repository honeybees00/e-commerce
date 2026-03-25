import React from 'react'

export const Card = ({title,description,price}) => {
  return (
    <div className='w-[300px]bg-gray-600 text-white shadow rounded-md'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{price}</p>
        <button className='bg-blue-700 p-1 rounded-sm'>Add to cart</button>

    </div>
    
  )
}

