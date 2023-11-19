import {configureStore} from '@reduxjs/toolkit';
import purchaseSummaryReducer from '../slices/purchaseSummarySlice';

const store = configureStore({
	reducer: {
		purchaseSummary: purchaseSummaryReducer,
	},
	devTools: true,
});

export default store;
