import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from 'components/CollectionItem';

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './styled';

const PreviewCollection = ({ title, items, routeName, match, history }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items.map((item, i) => i < 4 && <CollectionItem key={item.id} item={item} />)}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(PreviewCollection);
