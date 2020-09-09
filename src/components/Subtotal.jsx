import React from 'react';
import '../styles/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../DataLayer/StateProvider';

function Subtotal() {
	const [{ basket, basketSubtotal }, dispatch] = useStateValue();
	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(basketSubtotal) => (
					<>
						<p>
							Subtotal ({basket?.length} items):{' '}
							<strong>{basketSubtotal}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={basketSubtotal}
				displayType="text"
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
//getBasketTotal(basket)
