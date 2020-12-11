import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview, selectIsCollectionFetching } from 'data/shop/selectors';
import CollectionPreview from 'components/CollectionPreview';
import WithSpinner from 'components/WithSpinner';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...collectionPreviewProps }) => (
      <CollectionPreview key={id} {...collectionPreviewProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching,
});

export default compose(connect(mapStateToProps), WithSpinner)(CollectionsOverview);
