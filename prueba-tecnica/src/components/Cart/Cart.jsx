import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/appActions';
import ProductCount from '../ProductCount/ProductCount';

const Cart = () => {
	const dispatch = useDispatch();
	const selectedProducts = useSelector((state) => state.cart.products);

	return (
		<TableContainer component={Paper}>
			<Table sx={{minWidth: 650}} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='center' style={{fontSize: '2em'}}>
							Cantidad
						</TableCell>
						<TableCell align='center' style={{fontSize: '2em'}}>
							Descripción
						</TableCell>
						<TableCell align='center' style={{fontSize: '2em'}}>
							Subtotal&nbsp;
						</TableCell>
						<TableCell align='center' style={{fontSize: '2em'}}>
							Total&nbsp;
						</TableCell>
						<TableCell align='center' style={{fontSize: '2em'}}>
							&nbsp;
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{selectedProducts?.map((product) => (
						<TableRow
							key={product.name}
							sx={{'&:last-child td, &:last-child th': {border: 0}}}
						>
							<TableCell align='center'>
								<ProductCount product={product} />
							</TableCell>
							<TableCell
								align='center'
								component='th'
								scope='product'
								onClick={() => {
									dispatch(removeFromCart(product));
								}}
							>
								{product.name}
							</TableCell>
							<TableCell align='center'>{product.price}</TableCell>
							<TableCell align='center'>
								{product.price * product.count}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Cart;
