import refs from './refs';
import photosTpl from '../templates/gallery-items.hbs';

const updateGalleryMarkup = photos => {
  const markup = photosTpl(photos);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
};

export default updateGalleryMarkup;
