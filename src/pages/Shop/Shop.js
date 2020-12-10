import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Collection from 'pages/Collection';
import CollectionsOverview from 'components/CollectionsOverview';
import WithSpinner from 'components/WithSpinner';
import { fetchCollectionsAsync } from 'data/shop/actions';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from 'data/shop/selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, fetchCollectionsAsync, isFetchingCollections, isCollectionsLoaded }) => {
  useEffect(() => fetchCollectionsAsync(), []);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => <CollectionWithSpinner isLoading={!isCollectionsLoaded} {...props} />}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isFetchingCollections: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
