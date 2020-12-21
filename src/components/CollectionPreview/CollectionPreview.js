import React from 'react';
import CollectionItem from 'components/CollectionItem';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './styled';

const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items.map((item, i) => i < 4 && <CollectionItem key={item.id} item={item} />)}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
