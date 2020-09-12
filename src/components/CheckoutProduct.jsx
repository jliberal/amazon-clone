import React from 'react';
import '../styles/CheckoutProduct.css';
import { useStateValue } from '../DataLayer/StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};

	return (
		<div id={id} className="checkoutProduct">
			<img src={image} alt={title} className="checkoutProduct__image" />
			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
