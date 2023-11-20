import {default as Grid} from '@mui/material/Grid';
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList/ProductList';
import './Home.css';

const bottomGridItemProps = {
	xs: 6,
	md: 4,
	height: '50vh',
	align: 'center',
};

const Home = () => {
	return (
		<Grid container spacing={2} columns={12}>
			<Grid
				item
				xs={6}
				lg={12}
				width={'100vw'}
				height={'50vh'}
				align={'center'}
			>
				<Cart />
			</Grid>
			<Grid {...bottomGridItemProps}>
				<ProductList />
			</Grid>
			<Grid {...bottomGridItemProps}></Grid>
			<Grid {...bottomGridItemProps}></Grid>
		</Grid>
	);
};

export default Home;
