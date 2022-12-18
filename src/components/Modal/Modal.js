import { useEffect, useRef } from 'react';
import { Overlay, ModalImg } from './Modal.style';

export default function Modal({ modalImg, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', onCloseEsc);

    return () => {
      window.removeEventListener('keydown', onCloseEsc);
    };
  });

  const onCloseEsc = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
  return (
    <Overlay onClick={onCloseBackdrop}>
      <ModalImg>
        <img src={modalImg} alt={modalImg} />
      </ModalImg>
    </Overlay>
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onCloseEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onCloseEsc);
//   }

//   onCloseEsc = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };

//   onCloseBackdrop = e => {
//     if (e.currentTarget === e.target) {
//       this.props.toggleModal();
//     }
//   };

//   render() {
//     return (
//       <Overlay onClick={this.onCloseBackdrop}>
//         <ModalImg>
//           <img src={this.props.modalImg} alt={this.props.modalImg} />
//         </ModalImg>
//       </Overlay>
//     );
//   }
// }

// export default Modal;
