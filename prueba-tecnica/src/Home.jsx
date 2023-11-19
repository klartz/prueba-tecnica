import { default as Grid, default as Item } from '@mui/material/Grid';
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import ProductList from './components/ProductList/ProductList';
import PurchaseSummary from './components/PurchaseSummary/PurchaseSummary';
import './Home.css';

const Home = () => {
	return (
		<Grid container spacing={2} columns={12}>
			<Grid
				className='item-1'
				item
				xs={6}
				lg={12}
				width={'100vw'}
				height={'50vh'}
			>
				<PurchaseSummary />
			</Grid>
			<Grid className='item-2' item xs={6} md={4} height={'50vh'}>
				<ProductList />
			</Grid>
			<Grid className='item-3' item xs={6} md={4} height={'50vh'}>
				<Item>xs=6 md=4</Item>
			</Grid>
			<Grid className='item-4' item xs={6} md={4} height={'50vh'}>
				<Item>xs=6 md=4</Item>
			</Grid>
		</Grid>
	);
};

export default Home;
