// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {Button} from '@mui/base';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../redux/appActions';

/*
	This component is used to show the amount of intances of a product in the
	card and modify it.
*/
const ProductCount = ({product: clickedProduct}) => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState(null);

	// when components mounts or product is updated
	useEffect(() => {
		if (clickedProduct) {
			setProduct(clickedProduct);
		}
	}, [clickedProduct]);

	const handleAdd = () => {
		dispatch(addToCart(product));
	};
	const handleSubstract = () => {
		dispatch(removeFromCart(product));
	};

	return (
		<div
			style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
		>
			<Button
				onClick={() => {
					handleAdd();
				}}
			>
				+
			</Button>
			<div style={{padding: '0% 3%'}}>{product?.count}</div>
			<Button
				onClick={() => {
					handleSubstract();
				}}
			>
				-
			</Button>
		</div>
	);
};

export default ProductCount;

ProductCount.propTypes = {
	product: propTypes.shape({
		name: propTypes.string,
		count: propTypes.number,
		price: propTypes.number,
	}),
};
