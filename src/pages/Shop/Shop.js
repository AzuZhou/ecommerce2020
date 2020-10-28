import React from 'react';
import CollectionPreview from 'components/CollectionPreview';
import SHOP_DATA from 'pages/Shop/data';

const Shop = () => (
  <div className="shop-page">
    {SHOP_DATA.map(({ id, ...collectionPreviewProps }) => (
      <CollectionPreview key={id} {...collectionPreviewProps} />
    ))}
  </div>
);

export default Shop;
