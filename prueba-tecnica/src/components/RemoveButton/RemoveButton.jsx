// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { removeProductFromCart } from '../../redux/appActions';
import propTypes from 'prop-types';


const RemoveButton = ({product}) => {
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => {
                dispatch(removeProductFromCart(product));
            }}
        >
            Quitar
        </Button>
    );

};

export default RemoveButton;

RemoveButton.propTypes = {
    product: propTypes.shape({
        name: propTypes.string,
        count: propTypes.number,
        price: propTypes.number,
    }),
};

