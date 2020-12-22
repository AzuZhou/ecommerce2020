import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollections } from 'data/shop/actions';
import Spinner from 'components/Spinner';

const Collection = lazy(() => import(/* webpackChunkName: "Collection" */ 'pages/Collection'));
const CollectionsOverview = lazy(() =>
  import(/* webpackChunkName: "CollectionsOverview" */ 'components/CollectionsOverview')
);

const Shop = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverview} match={match} />
        <Route path={`${match.path}/:categoryId`} component={Collection} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(Shop);
