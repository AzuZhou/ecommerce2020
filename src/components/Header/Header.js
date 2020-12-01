import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from 'utils/firebase/firebase';
import CartIcon from 'components/CartIcon';
import CartDropdown from 'components/CartDropdown';
import { selectCartHidden } from 'data/cart/selectors';
import { selectCurrentUser } from 'data/user/selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './styled';

import Logo from 'assets/crown.svg';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink className='uppercase' to='/shop'>
        shop
      </OptionLink>
      <OptionLink className='uppercase' to='/shop'>
        contact
      </OptionLink>
      {currentUser ? (
        <OptionDiv className='uppercase' onClick={() => auth.signOut()}>
          sign out
        </OptionDiv>
      ) : (
        <OptionLink className='uppercase' to='/sign-in'>
          sign in
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
