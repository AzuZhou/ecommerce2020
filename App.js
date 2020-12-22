import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createGlobalStyle } from 'styled-components';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import { selectCurrentUser } from 'data/user/selectors';
import { checkUserSession } from 'data/user/actions';
import ErrorBoundary from 'components/ErrorBoundary';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans Condensed', sans-serif;
  padding: 20px 60px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: black;
}

.uppercase {
  text-transform: uppercase;
}
`;

const Home = lazy(() => import(/* webpackChunkName: "Home" */ 'pages/Home'));
const Shop = lazy(() => import(/* webpackChunkName: "Shop" */ 'pages/Shop'));
const Sign = lazy(() => import(/* webpackChunkName: "Sign" */ 'pages/Sign'));
const Checkout = lazy(() => import(/* webpackChunkName: "Checkout" */ 'pages/Checkout'));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/sign-in' render={() => (currentUser ? <Redirect to='' /> : <Sign />)} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
