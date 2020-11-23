import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from 'components/CollectionPreview';
import { selectCollections } from 'data/shop/selectors';

const Shop = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...collectionPreviewProps }) => (
      <CollectionPreview key={id} {...collectionPreviewProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
