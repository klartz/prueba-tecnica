import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import {Paper} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/appActions';
import getProductList from '../../services/getProductList';

const ProductList = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	// when component mounts
	useEffect(() => {
		setProducts(getProductList());
	}, []);

	return (
		<Box
			sx={{
				width: '100%',
				maxWidth: 450,
				alignItems: 'center',
			}}
		>
			<Paper elevation={4}>
				<ListSubheader
					style={{fontSize: '1.5em', textAlign: 'center', color: 'black'}}
				>
					Seleccionar nuevo producto
				</ListSubheader>
				<List>
					{products?.map(
						(product) =>
							product && (
								<ListItem disablePadding key={product.name}>
									<ListItemButton>
										<ListItemText
											primary={`${product.name} - $${product.price}`}
											style={{fontSize: '1.5em'}}
											align={'center'}
											onClick={() => {
												dispatch(addToCart(product));
											}}
										/>
									</ListItemButton>
								</ListItem>
							)
					)}
				</List>
			</Paper>
		</Box>
	);
};

export default ProductList;
