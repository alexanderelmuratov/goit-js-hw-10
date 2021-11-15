export function createCountryListMarkup(countries) {
    return countries
        .map(({ name, flags }) => {
            return `
            <li class="country-list__item">
                <img class="country-list__flag" src="${flags.svg}" alt="Flag of ${name.official}">
                <p class="country-list__name">${name.official}</p>
            </li>            
            `;
        })
        .join('');
}

export function createCountryInfoMarkup(countries) {
    return countries
        .map(({
            name,
            capital,
            population,
            flags,
            languages,
        }) => {
            return `
            <img class="country-info__flag" src="${flags.svg}" alt="Flag of ${name.official}">
            <p class="country-info__name">${name.official}</p>
            <p class="country-info__capital">
                <span class="country-info__key">Capital: </span>
                ${capital}
            </p>
            <p class="country-info__population">
                <span class="country-info__key">Population: </span>
                ${population}
            </p>
            <p class="country-info__languages">
                <span class="country-info__key">Languages: </span>
                ${Object.values(languages).join(', ')}
            </p>
            `;
        })
        .join('');
}
