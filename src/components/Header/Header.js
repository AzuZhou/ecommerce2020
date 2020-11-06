import React from 'react';
import { Link } from 'react-router-dom';
import Logo from 'assets/crown.svg';
import { auth } from 'utils/firebase/firebase';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

export default Header;
