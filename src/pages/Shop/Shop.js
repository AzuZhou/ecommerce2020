import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Collection from 'pages/Collection';
import CollectionsOverview from 'components/CollectionsOverview';
import WithSpinner from 'components/WithSpinner';
import { updateCollections } from 'data/shop/actions';
import { firestore, convertCollectionsSnapshotsToMap } from 'utils/firebase/firebase';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match, updateCollections }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });
  });

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${match.path}/:categoryId`}
        render={props => <CollectionWithSpinner isLoading={isLoading} {...props} />}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
