import {createAction} from '@reduxjs/toolkit';

export const addToPurchaseSummary = createAction(
	'purchaseSummary/addToPurchaseSummary'
);
export const removeFromPurchaseSummary = createAction(
	'purchaseSummary/removeFromPurchaseSummary'
);
