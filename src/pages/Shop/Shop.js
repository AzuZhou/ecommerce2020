import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from 'pages/Collection';
import CollectionsOverview from 'components/CollectionsOverview';
import { fetchCollections } from 'data/shop/actions';

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={Collection} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(Shop);
