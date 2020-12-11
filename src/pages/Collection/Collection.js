import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCollection, selectIsCollectionsLoaded } from 'data/shop/selectors';
import WithSpinner from 'components/WithSpinner';
import CollectionItem from 'components/CollectionItem';

const Collection = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) => selectCollection(ownProps.match.params.categoryId)(state),
  isLoading: state => !selectIsCollectionsLoaded(state),
});

export default compose(connect(mapStateToProps), WithSpinner)(Collection);
