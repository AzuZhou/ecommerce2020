import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from 'pages/Collection';
import CollectionsOverview from 'components/CollectionsOverview';
import { fetchCollectionsAsync } from 'data/shop/actions';

const Shop = ({ match, fetchCollectionsAsync }) => {
  useEffect(() => fetchCollectionsAsync(), []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
