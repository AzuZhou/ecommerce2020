import React from 'react';
import { connect } from 'react-redux';
import CustomButton from 'components/CustomButton';
import CartItem from 'components/CartItem';
import { selectCartItems } from 'data/cart/selectors';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>go to checkout</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
