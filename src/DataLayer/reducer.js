export const initialState = {
	basket: [],
	basketSubtotal: 0,
	user: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			console.log(action.item.price);
			console.log(state.basketSubtotal);
			const subtotal = state.basketSubtotal + action.item.price;
			return {
				...state,
				basket: [...state.basket, action.item],
				basketSubtotal: subtotal,
			};
		default:
			return state;
	}
};

export default reducer;
