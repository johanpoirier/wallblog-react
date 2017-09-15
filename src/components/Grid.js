import React from 'react';
import PropTypes from 'prop-types';
import Picture from './Picture';

const Grid = ({ items }) => (
  <div className="grid">
    {items.map(item => (
      <Picture key={item.id} item={ item } />
    ))}
  </div>
);

Grid.propTypes = {
  items: PropTypes.array.isRequired
};

export default Grid;
