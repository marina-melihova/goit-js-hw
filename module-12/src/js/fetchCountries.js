import refs from './refs.js';
import { error, Stack } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

let notice;
const stack1 = new Stack({
  dir1: 'down',
  firstpos1: 75,
  dir2: 'left',
  firstpos2: 75,
});

const fetchCountries = searchQuery => {
  let markup = '';
  const url = 'https://restcountries.eu/rest/v2/name/';
  return fetch(url + searchQuery)
    .then(response => response.json())
    .then(data => {
      if (data.length > 10) {
        notice = error({
          text: 'Too many matches found. Please enter a more specific query!',
          stack: stack1,
        });
      } else if (data.length === 1) {
        if (stack1.length) {
          notice.close();
        }
        const country = data[0];
        markup = `<div class="output__country">
        <div class="output__country-name">${country.name}</div>
        <div class="output__country-info">
        <div class="output__country-data">
        <div class="output__country-capital"><span class="label">Capital: </span>${country.capital}</div>
        <div class="output__country-population"><span class="label">Population: </span>${country.population}</div>`;
        if (country.languages.length > 1) {
          markup += '<span class="label">Languages: </span>';
          markup += '<ul class="output__country-listLang">';
          country.languages.forEach(({ name }) => {
            markup += `<li>${name}</li>`;
          });
          markup += '</ul>';
        } else {
          markup += `<div class="output__country-lang"><span class="label">Language: </span>${country.languages[0].name}</div>`;
        }
        markup += `</div>
        <img class="output__country-flag" src="${country.flag}"></div>
        </div></div>`;
      } else {
        if (stack1.length) {
          notice.close();
        }
        const countries = data.map(({ name }) => name);
        markup = '<ul class="output__list">';
        countries.forEach(country => {
          markup += `<li>${country}</li>`;
        });
        markup += '</ul>';
      }
      refs.output.innerHTML = markup;
    });
};

export default fetchCountries;
