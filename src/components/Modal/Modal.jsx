import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'; // Make sure to create a corresponding CSS module

class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  handleBackdropClick = e => {
  // Check if the click target is the overlay (background) element or the close button
  if (e.target.classList.contains(styles.overlay) || e.target.classList.contains(styles.closeButton)) {
    this.props.onClose();
  }
};

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { image, tags } = this.props;
    return (
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={this.props.onClose}>X</button>
          <img src={image} alt={tags} />
        </div>
      </div>
    );
  }
}

export default Modal;
