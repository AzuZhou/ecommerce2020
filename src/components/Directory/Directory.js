import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from 'data/directory/selectors';

import MenuItem from 'components/MenuItem';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections &&
      sections.map(({ id, ...menuItemProps }) => <MenuItem key={id} {...menuItemProps} />)}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
