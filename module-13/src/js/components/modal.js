import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const showModal = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  basicLightbox
    .create(`<img class="modal__image" src="${e.target.dataset.source}" width="1280" height="850">`)
    .show();
};

export default showModal;
