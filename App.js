import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Sign from 'pages/Sign';
import Checkout from 'pages/Checkout';
import Header from 'components/Header';
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from 'utils/firebase/firebase';
import { setCurrentUser } from 'data/user/actions';
import { selectCurrentUser } from 'data/user/selectors';
import { selectCollectionsForPreview } from 'data/shop/selectors';

const App = ({ setCurrentUser, currentUser, collectionsArray }) => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }

      // used to programatically add data to firestore
      addCollectionAndDocuments(
        'collections',
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });

    return () => unsubscribeFromAuth();
  });

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
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
