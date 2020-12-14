import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Sign from 'pages/Sign';
import Checkout from 'pages/Checkout';
import Header from 'components/Header';
import { selectCurrentUser } from 'data/user/selectors';

const App = ({ currentUser }) => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/sign-in' render={() => (currentUser ? <Redirect to='' /> : <Sign />)} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
