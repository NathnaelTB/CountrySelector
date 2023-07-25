var MainSelect = document.querySelector('select');
var country = document.getElementById('country');
var parent =  document.getElementById('parent');
MainSelect.addEventListener('change', determine);

console.log(MainSelect);


function determine() {
    if (MainSelect.selectedIndex == 0) {
        Africa();
    }
    
    if (MainSelect.selectedIndex == 1) {
        Antarctica();
    }

    if (MainSelect.selectedIndex == 2) {
        Asia();
    }

    if (MainSelect.selectedIndex == 3) {
        Australia();
    }

    if (MainSelect.selectedIndex == 4) {
        Europe();
    }

    if (MainSelect.selectedIndex == 5) {
        NorthAmerica();
    }

    if (MainSelect.selectedIndex == 6) {
        SouthAmerica();
    }
}

function Africa() {
    parent.firstElementChild.replaceWith(country);
}

function Australia() {
    var select = document.createElement('select');
    var option = document.createElement('option');
    var australia = document.createTextNode('Australia');

    option.appendChild(australia);
    select.appendChild(option);
    parent.firstElementChild.replaceWith(select);
}

function Antarctica() {
    var select = document.createElement('select');
    var option = document.createElement('option');
    var antarctica= document.createTextNode('Antarctica');

    option.appendChild(antarctica);
    select.appendChild(option);
    parent.firstElementChild.replaceWith(select);
}

function Asia () {
    var select = document.createElement('select');

    var argentina = document.createElement('option');
    argentina.appendChild(document.createTextNode('China'));

    var brazil = document.createElement('option');
    brazil.appendChild(document.createTextNode('Japan'));

    var mexico = document.createElement('option');
    mexico.appendChild(document.createTextNode('Korea'));

    var cuba = document.createElement('option');
    cuba.appendChild(document.createTextNode('India'));

    var panama = document.createElement('option');
    panama.appendChild(document.createTextNode('Pakistan'));

    select.appendChild(argentina);
    select.appendChild(brazil);
    select.appendChild(mexico);
    select.appendChild(cuba);
    select.appendChild(panama);

    parent.firstElementChild.replaceWith(select);
    
}

function Europe () {
    var select = document.createElement('select');

    var germany = document.createElement('option');
    germany.appendChild(document.createTextNode('Germany'));

    var france = document.createElement('option');
    france.appendChild(document.createTextNode('France'));

    var italy = document.createElement('option');
    italy.appendChild(document.createTextNode('Italy'));

    var spain = document.createElement('option');
    spain.appendChild(document.createTextNode('Spain'));

    var poland = document.createElement('option');
    poland.appendChild(document.createTextNode('Poland'));

    select.appendChild(germany);
    select.appendChild(france);
    select.appendChild(italy);
    select.appendChild(spain);
    select.appendChild(poland);

    parent.firstElementChild.replaceWith(select);
}

function NorthAmerica () {
    var select = document.createElement('select');

    var usa = document.createElement('option');
    usa.appendChild(document.createTextNode('USA'));

    var canada = document.createElement('option');
    canada.appendChild(document.createTextNode('Canada'));

    var mexico = document.createElement('option');
    mexico.appendChild(document.createTextNode('Mexico'));

    var cuba = document.createElement('option');
    cuba.appendChild(document.createTextNode('Cuba'));

    var panama = document.createElement('option');
    panama.appendChild(document.createTextNode('Panama'));

    select.appendChild(usa);
    select.appendChild(canada);
    select.appendChild(mexico);
    select.appendChild(cuba);
    select.appendChild(panama);

    parent.firstElementChild.replaceWith(select);
}

function SouthAmerica() {
    var select = document.createElement('select');

    var argentina = document.createElement('option');
    argentina.appendChild(document.createTextNode('Argentina'));

    var brazil = document.createElement('option');
    brazil.appendChild(document.createTextNode('Brazil'));

    var columbia = document.createElement('option');
    columbia.appendChild(document.createTextNode('Columbia'));

    var peru = document.createElement('option');
    peru.appendChild(document.createTextNode('Peru'));

    var chile = document.createElement('option');
    chile.appendChild(document.createTextNode('Chile'));

    select.appendChild(argentina);
    select.appendChild(brazil);
    select.appendChild(columbia);
    select.appendChild(peru);
    select.appendChild(chile);

    parent.firstElementChild.replaceWith(select);
}