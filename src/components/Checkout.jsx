import React from 'react';
import '../styles/Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../DataLayer/StateProvider';

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div className="checkout__messages">
					<h3>Price drop down</h3>
				</div>
				<div className="checkout__title">
					<h2>Your shopping Basket</h2>
				</div>
				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						price={item.price}
						image={item.image}
						rating={item.rating}
					/>
				))}
			</div>
			<div className="checkout__right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
