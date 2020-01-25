import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartItemsContainer, CartDropdownButton, EmptyMessageContainer } from './cart-dropdown.styles';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<CartDropDownContainer>
		<CartItemsContainer>
			{
				cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
						<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
					)}
		</CartItemsContainer>
		<CartDropdownButton onClick={() => {
			history.push('/checkout');
			dispatch(toggleCartHidden());
		}}>
			GO TO CHECKOUT
		</CartDropdownButton>
	</CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropdown));