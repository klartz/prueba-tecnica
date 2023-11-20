import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	products: [], // array of objects {product, price, count}
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		/*
			if product exists in state.products, increment count by 1
			if not, add product to state.products with count = 1
		*/
		addToCart: (state, action) => {
			console.log('action desde reducer', action);
			console.log('state desde reducer', state.products);
			const product = action.payload;
			const productIndex = state.products.findIndex(
				(stateProduct) => stateProduct.name === product.name
			);
			if (productIndex === -1) {
				state.products = [...state.products, {...product, count: 1}];
			} else {
				state.products[productIndex].count += 1;
			}
		},

		/*
			if there is more than one instance of the product in state.products,
			decrement count by 1
			if not, remove product from state.products
		*/
		removeFromCart: (state, action) => {
			const product = action.payload;
			const productIndex = state.products.findIndex(
				(stateProduct) => stateProduct.name === product.name
			);
			if (productIndex !== -1) {
				state.products[productIndex].count -= 1;
				if (state.products[productIndex].count === 0) {
					state.products.splice(productIndex, 1);
				}
			}
		},

		removeProductFromCart: (state, action) => {
			const product = action.payload;
			state.products = state.products.filter(
				(stateProduct) => stateProduct.name !== product.name
			);
		}
	},
});

export const {addToCart, removeFromCart, removeProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;
