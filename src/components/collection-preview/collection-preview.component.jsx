import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-items/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <div className='collection-preview'>
    <h1
      className='title'
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
