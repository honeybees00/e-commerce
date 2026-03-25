import React from 'react'


export const CheckOut = () => {
  return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<form className="border border-md bg-white rounded-xl p-2 shadow">
				<label>Card Holder Name</label>
				<input type="text" className="focus:ring-purple-200 border p-2" />
				<label>Card Number</label>
				<input type="number" className="focus:ring-purple-200 border p-2" />
				<label>Expiration date</label>
				<input type="date" className="focus:ring-purple-200 border p-2" />
				<label>cvv code</label>
				<input type="password" className="focus:ring-purple-200 border p-2" />
        <button type='submit'className='hover:bg-gray-900 bg-gray-200 rounded p-1 shadow' >Pay Now</button>
			</form>
		</div>
	);
}
