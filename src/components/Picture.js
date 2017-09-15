import React from 'react';
import PropTypes from 'prop-types';

class Picture extends React.Component {
  constructor(props, context) {
    super(props, context);

    const file = encodeURIComponent(decodeURIComponent(this.props.item.file));
    const filenameInfo = file.split('.');

    this.state = {
      item: Object.assign({}, this.props.item),
      extension: filenameInfo.pop(),
      filename: filenameInfo.join('.')
    };
  }

  render() {
    return (
      <div className="picture">
        <img src={ `/pictures/${this.state.filename}--320.${this.state.extension}` } />
        {this.state.item.description}
      </div>
    );
  }
}

Picture.propTypes = {
  item: PropTypes.object.isRequired
};

export default Picture;
