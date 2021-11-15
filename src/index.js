import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries';
import { createCountryListMarkup, createCountryInfoMarkup } from './createMarkup';
    
const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', debounce(onSearchBoxInput, DEBOUNCE_DELAY));

function onSearchBoxInput() {
    const searchCountry = searchBox.value.trim();
    if (searchCountry === '') {
        return resetCountryMarkup();
    }
    fetchCountries(searchCountry)
        .then(renderCountryMarkup)
        .catch(showError);
}

function showError() {
    resetCountryMarkup();
    return Notify.failure("Oops, there is no country with that name");
}

function renderCountryMarkup(countryData) {
    const countryListMarkup = createCountryListMarkup(countryData);
    const countryInfoMarkup = createCountryInfoMarkup(countryData);

    resetCountryMarkup();

    if (countryData.length > 10) {
        return Notify.info("Too many matches found. Please enter a more specific name.");        
    }

    if (countryData.length > 1 && countryData.length <= 10) {
        return countryList.insertAdjacentHTML('beforeend', countryListMarkup);
    }

    if (countryData.length === 1) {
        return countryInfo.insertAdjacentHTML('beforeend', countryInfoMarkup);        
    }    
}

function resetCountryMarkup() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}
