function createOption(container, text, func) {
    const input = document.createElement('input');
    input.id = `option_${text}`;
    input.name = `option_${text}`;
    input.type = 'checkbox';
    const label = document.createElement('label');
    label.htmlFor = `option_${text}`;
    label.textContent = text;
    label.onclick = func;
    container.appendChild(input);
    container.appendChild(label);

}

function _openAllLinks() {
    const links = document.querySelectorAll('.offers-list a.ext');
    for (const link of links) {
        window.open(link.href, '_blank');
    }
}

function _showOnlyLocation() {
    const location = document.querySelector('#regionFilter > option')
    const city = location.getAttribute('value').split(':')[1];
    if (!city) {
        alert('Nie wybrano miasta');
        return;
    }
    articles = document.querySelectorAll('.offers-list article');
    let hidden = 0;
    for (const article of articles) {
        const hide = (c) => {
            article.parentNode.parentNode.appendChild(document.createTextNode(`Ukryta oferta z miasta: ${c}`));
            article.parentNode.remove();
            hidden++;
        }
        const main_location = article.querySelector('span.location').textContent.split(',')[0].trim();
        const other_location = article.querySelector('span.location em')?.textContent.split(':')[1]?.trim();
        if (other_location) {
            if (!other_location.startsWith(city)) { hide(other_location); }
        } else {
            if (!main_location.startsWith(city)) { hide(main_location); }
        }
    }
    alert(`Ukryto ${hidden} ofert z miast innych niż ${city}`);
}

function addCustomOptions() {
    // allow adaptable flex on options
    const filter_container = document.querySelector('.filtr-row');
    for (const child of filter_container.children) {
        child.className = (Array.from(child.classList).filter(cls => !cls.startsWith('col'))).join(' ');
    }
    filter_container.style.display = 'flex';
    filter_container.style.justifyContent = 'space-between';

    // add column for custom options
    const custom_filters = document.createElement('div');
    custom_filters.className = 'ext';
    const custom_filter_title = document.createElement('span');
    custom_filter_title.className = 'group-title';
    custom_filter_title.innerHTML = 'Dodatkowe opcje';
    custom_filters.appendChild(custom_filter_title);

    // options
    createOption(custom_filters, 'Otwórz wszystkie linki na stronie', _openAllLinks);
    createOption(custom_filters, 'Pokaż tylko z danego miasta', _showOnlyLocation);
    
    filter_container.appendChild(custom_filters)
}