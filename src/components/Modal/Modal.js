import { Component } from 'react';

import { Overlay, ModalImg } from './Modal.style';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEsc);
  }

  onCloseEsc = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onCloseBackdrop}>
        <ModalImg>
          <img src={this.props.modalImg} alt={this.props.modalImg} />
        </ModalImg>
      </Overlay>
    );
  }
}

export default Modal;
