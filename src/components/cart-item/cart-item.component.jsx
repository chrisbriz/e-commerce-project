import React from 'react';

import { CartItemContainer, ItemDetailContainer, NameContainer, PriceContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>
        {quantity} x ${price}
      </PriceContainer>
    </ItemDetailContainer>
  </CartItemContainer>
);

export default CartItem;