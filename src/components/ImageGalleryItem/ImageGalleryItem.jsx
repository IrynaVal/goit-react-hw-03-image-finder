import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const {
      item: { webformatURL, largeImageURL, tags },
    } = this.props;

    return (
      <>
        <li className="gallery-item">
          <img src={webformatURL} alt={tags} />
          <button type="button" onClick={this.openModal}></button>
        </li>
        {this.state.isOpen && <Modal image={largeImageURL} tags={tags} />}
      </>
    );
  }
}

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
// npm install basiclightboxz
