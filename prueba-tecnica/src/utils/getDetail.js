export const getTotalPrice = (products) => {
    return products.reduce((totalPrice, { price, count }) => totalPrice + (price * count), 0);
};

export const getTotalCount = (products) => {
    return products.reduce((totalCount, product) => totalCount + product.count, 0);
};
