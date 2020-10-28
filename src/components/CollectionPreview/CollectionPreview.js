import React from 'react';
import CollectionItem from 'components/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title uppercase'>{title}</h1>
    <div className='preview'>
      {items.map(
        ({ id, ...collectionItemProps }, i) =>
          i < 4 && <CollectionItem key={id} {...collectionItemProps} />
      )}
    </div>
  </div>
);

export default PreviewCollection;
