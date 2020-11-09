import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Sign from 'pages/Sign';
import Header from 'components/Header';
import { auth, createUserProfileDocument } from 'utils/firebase/firebase';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

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
    });

    return () => unsubscribeFromAuth();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' component={Sign} />
      </Switch>
    </div>
  );
};

export default App;
