import updateGalleryMarkup from './js/update-gallery-markup';
import refs from './js/refs';
import apiService from './js/apiService';
import LoadMoreBtn from './js/components/load-more-button';
import showModal from './js/components/modal';
import './sass/styles.scss';

const loadMoreBtn = new LoadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchPhotos);
refs.galleryContainer.addEventListener('click', showModal);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  clearGalleryContainer();
  apiService.resetPage();
  fetchPhotos();
  form.reset();
}

async function fetchPhotos() {
  loadMoreBtn.disable();
  try {
    const photos = await apiService.getPhotos();
    updateGalleryMarkup(photos);
    loadMoreBtn.show();
    loadMoreBtn.enable();
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log('Лог ошибки из fetchPhotos: ' + error);
  }
}

function clearGalleryContainer() {
  refs.galleryContainer.innerHTML = '';
}
