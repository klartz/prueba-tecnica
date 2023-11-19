// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import propTypes from 'prop-types';
import {Button} from '@mui/base';
import {useDispatch} from 'react-redux';
import {addToCart, removeFromCart} from '../../redux/appActions';

const ProductCount = ({product: clickedProduct}) => {
	const dispatch = useDispatch();
	const [product, setProduct] = useState(null);

	// when components mounts or product is updated
	useEffect(() => {
		console.log('clickedProduct', clickedProduct);
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
		<div style={{display: 'flex', alignItems: 'center'}}>
			<Button
				onClick={() => {
					handleAdd();
				}}
			>
				+
			</Button>
			<div>{product?.count}</div>
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
