import React from 'react';
import CollectionItem from 'components/CollectionItem';

const PreviewCollection = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title uppercase'>{title}</h1>
    <div className='preview'>
      {items.map((item, i) => i < 4 && <CollectionItem key={item.id} item={item} />)}
    </div>
  </div>
);

export default PreviewCollection;
