import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Shop from 'pages/Shop';
import Sign from 'pages/Sign';
import Header from 'components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route path='/sign-in' component={Sign} />
      </Switch>
    </div>
  );
};

export default App;
