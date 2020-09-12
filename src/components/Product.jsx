import React from 'react';
import '../styles/Product.css';
import { useStateValue } from '../DataLayer/StateProvider';

function Product({ id, title, image, price, rating }) {
	const [state, dispatch] = useStateValue();

	const addToBasket = () => {
		//Disptach an action
		dispatch({
			type: 'ADD_TO_BASKET',
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div id={id} className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt={title} />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
