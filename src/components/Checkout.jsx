import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div className="checkout__messages">
					<h3>Price drop down</h3>
				</div>
				<div className="checkout__title">
					<h2>Shopping Cart</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
