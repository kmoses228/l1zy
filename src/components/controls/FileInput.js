import React, { Component } from "react";
import PropTypes from "prop-types";

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(evt) {
    const src = URL.createObjectURL(evt.target.files[0]);
    this.props.onUpload(src);
  }

  render() {
    return (
      <input
        type="file"
        id="inputFile"
        accept="audio/*"
        onChange={this.handleUpload}
      />
    );
  }
}

FileInput.propTypes = {
  onUpload: PropTypes.func.isRequired
};

export default FileInput;
