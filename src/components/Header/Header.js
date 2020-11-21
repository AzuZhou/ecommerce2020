import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from 'utils/firebase/firebase';
import CartIcon from 'components/CartIcon';
import CartDropdown from 'components/CartDropdown';
import { selectCartHidden } from 'data/cart/selectors';
import { selectCurrentUser } from 'data/user/selectors';
import Logo from 'assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option uppercase' to='/shop'>
        shop
      </Link>
      <Link className='option uppercase' to='/shop'>
        contact
      </Link>
      {currentUser ? (
        <div className='option uppercase' onClick={() => auth.signOut()}>
          sign out
        </div>
      ) : (
        <Link className='option uppercase' to='/sign-in'>
          sign in
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
