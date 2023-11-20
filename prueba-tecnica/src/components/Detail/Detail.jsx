import {Box, Paper} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getTotalCount, getTotalPrice} from '../../utils/getDetail';

/*
	This component is used to show the total count and total price of the products
	in the cart.
*/
const Detail = () => {
	const productsInCart = useSelector((state) => state.cart.products);

	const [totalCount, setTotalCount] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setTotalCount(getTotalCount(productsInCart));
		setTotalPrice(getTotalPrice(productsInCart));
	}, [productsInCart]);

	return (
		<Box sx={{width: '100%', maxWidth: 500}}>
			<Paper elevation={4}>
				<ListSubheader
					style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}
				>
					Detalles de la compra
				</ListSubheader>
				<List>
					<ListItem disablePadding>
						<ListItemText
							primary={`Cantidad de items: ${totalCount}`}
							align={'center'}
						/>
					</ListItem>
					<ListItem disablePadding>
						<ListItemText
							primary={`Precio total: $${totalPrice}`}
							align={'center'}
						/>
					</ListItem>
				</List>
			</Paper>
		</Box>
	);
};

export default Detail;
