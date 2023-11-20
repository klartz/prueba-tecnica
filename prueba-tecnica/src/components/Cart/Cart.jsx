import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCount from '../ProductCount/ProductCount';
import RemoveButton from '../RemoveButton/RemoveButton';

// eslint-disable-next-line react/prop-types
const CustomTableCell = ({align = 'center', fontSize = '1em', children}) => (
	<TableCell align={align} style={{fontSize: `${fontSize}`}}>
		{children}
	</TableCell>
);

/*
	This component is used to show the products in the cart.
*/
const Cart = () => {
	const selectedProducts = useSelector((state) => state.cart.products);

	return (
		<TableContainer component={Paper}>
			<Table sx={{minWidth: 650}}>
				<TableHead>
					<TableRow>
						<CustomTableCell fontSize='2em'>
							Cantidad
						</CustomTableCell>
						<CustomTableCell fontSize='2em'>
							Descripción
						</CustomTableCell>
						<CustomTableCell fontSize='2em'>
							Subtotal
						</CustomTableCell>
						<CustomTableCell fontSize='2em'>
							Total
						</CustomTableCell>
						<CustomTableCell/>
					</TableRow>
				</TableHead>
				<TableBody>
					{selectedProducts?.map((product) => (
						<TableRow
							key={product.name}
							sx={{'&:last-child td, &:last-child th': {border: 0}}}
						>
							<CustomTableCell>
								<ProductCount product={product} />
							</CustomTableCell>
							<CustomTableCell>{product.name}</CustomTableCell>
							<CustomTableCell>{product.price}</CustomTableCell>
							<CustomTableCell>{product.price * product.count}</CustomTableCell>
							<CustomTableCell align='right'>
								<RemoveButton product={product} />
							</CustomTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Cart;
