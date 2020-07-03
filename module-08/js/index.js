import galleryItems from './gallery-items.js';

let indexCurrentImage;

const listGalleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const imageModalRef = document.querySelector('.lightbox__image');
const closeModalBtn = document.querySelector('[data-action="close-lightbox"]');
const overlayRef = document.querySelector('.lightbox__overlay');

createGallery();

listGalleryRef.addEventListener('click', onOpenModal);

function createGallery() {
  let markup = '';
  for (let i = 0; i < galleryItems.length; i += 1) {
    markup += `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${galleryItems[i].original}"
    >
      <img
        class="gallery__image"
        src="${galleryItems[i].preview}"
        data-source="${galleryItems[i].original}"
        alt="${galleryItems[i].description}"
        data-index="${i}"
      />
    </a>
  </li>`;
  }
  listGalleryRef.innerHTML = markup;
}

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  window.addEventListener('keydown', onPressKey);
  modalRef.classList.add('is-open');
  imageModalRef.src = e.target.dataset.source;
  imageModalRef.alt = e.target.alt;
  indexCurrentImage = Number(e.target.dataset.index);
  closeModalBtn.addEventListener('click', onCloseModal);
  overlayRef.addEventListener('click', onCloseModal);
}

function onCloseModal() {
  modalRef.classList.remove('is-open');
  window.removeEventListener('keydown', onPressKey);
  closeModalBtn.removeEventListener('click', onCloseModal);
  overlayRef.removeEventListener('click', onCloseModal);
}

function onPressKey(e) {
  switch (e.code) {
    case 'Escape':
      onCloseModal();
      break;
    case 'ArrowRight':
      indexCurrentImage + 1 === galleryItems.length
        ? (indexCurrentImage = 0)
        : (indexCurrentImage += 1);
      imageModalRef.src = galleryItems[indexCurrentImage].original;
      break;
    case 'ArrowLeft':
      indexCurrentImage === 0
        ? (indexCurrentImage = galleryItems.length - 1)
        : (indexCurrentImage -= 1);
      imageModalRef.src = galleryItems[indexCurrentImage].original;
      break;
  }
}
