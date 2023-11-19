import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/appActions';
import getProductList from '../../services/getProductList';

const ProductListNew = () => {
	const dispatch = useDispatch();
	const [products, setProducts] = useState([]);

	// when component mounts
	useEffect(() => {
		setProducts(getProductList());
	}, []);

	return (
		<Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
			<nav aria-label='main mailbox folders'>
				<ListSubheader style={{fontSize: '1.5em', textAlign: 'center'}}>
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
			</nav>
		</Box>
	);
};

export default ProductListNew;
