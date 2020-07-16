import debounce from 'lodash.debounce';
import refs from './js/refs.js';
import fetchCountries from './js/fetchCountries.js';
import './css/styles.css';

let strQuery = '';
const countries = [];
refs.query.value = '';

const onInputDebounce = debounce(e => {
  strQuery = e.target.value;
  if (strQuery) {
    fetchCountries(strQuery);
  }
}, 500);

refs.query.addEventListener('input', onInputDebounce);
