var select = document.querySelector('select');
var replace = document.getElementById('country');
select.addEventListener('change', determine);

function determine() {
    if (select.selectedIndex == 0) {
        Antarctica();
    }
    
    if (select.selectedIndex == 1) {
        Antarctica();
    }

    if (select.selectedIndex == 2) {
        Antarctica();
    }

    if (select.selectedIndex == 3) {
        Antarctica();
    }

    if (select.selectedIndex == 4) {
        Antarctica();
    }

    if (select.selectedIndex == 5) {
        Antarctica();
    }

    if (select.selectedIndex == 6) {
        Antarctica();
    }
}

function Africa() {
    
}

function Australia() {
    var select = document.createElement('select');
    var option = document.createElement('option');
    var australia = document.createTextNode('Australia');

    option.appendChild(australia);
    select.appendChild(option);
}

function Antarctica() {
    var select = document.createElement('select');
    var option = document.createElement('option');
    var antarctica= document.createTextNode('Antarctica');

    option.appendChild(antarctica);
    select.appendChild(option);
    replace.replaceWith(select);
}

function Asia () {

}

function Europe () {

}

function NorthAmerica () {

}

function SouthAmerica() {

}