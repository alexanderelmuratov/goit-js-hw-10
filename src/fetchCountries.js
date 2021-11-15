const BASE_URL = 'https://restcountries.com/v3.1/name';
const FILTER_FIELDS = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
    return fetch(`${BASE_URL}/${name}?${FILTER_FIELDS}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        });
}
