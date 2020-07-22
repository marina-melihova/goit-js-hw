import axios from 'axios';

const apiKey = '17552314-2488ac3d167da7c7e0d9d1cd2';

export default {
  searchQuery: '',
  page: 1,
  async getPhotos() {
    const { data } = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`,
    );
    this.incrementPage();
    return data.hits;
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
