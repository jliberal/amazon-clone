export const initialState = {
	basket: [],
	basketSubtotal: 0,
	user: null,
};

export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			return { ...state, user: action.user };
		case 'ADD_TO_BASKET':
			const subtotal = state.basketSubtotal + action.item.price;
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case 'REMOVE_FROM_BASKET':
			const index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`Cant remove product id ${action.id} from basket`);
			}
			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;
