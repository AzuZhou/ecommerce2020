import React from 'react';
import { Route } from 'react-router-dom';
import Collection from 'pages/Collection';
import CollectionsOverview from 'components/CollectionsOverview';

const Shop = ({ match }) =>
  console.log('MATCH', match) || (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );

export default Shop;
