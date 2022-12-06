/*What I'm working with*/
/*Provided in Challenge READme*/
/*https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys*/

/*Openweathermap.org*/
/*Geocoding API:   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}*/
/*5Day/3Hour forecast API:  api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}*/
/*Current Weather API:  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}*/
//ISO 3166-2:US


/* target variables*/
const selectionBox = document.getElementById('Selection');
const toggleMenu = document.getElementById('myButton-OpenClose');
const citySubmit = document.getElementById('user-Selected');
const cityInput = document.querySelector('#city-Input');
const clearStorage = document.getElementById('clear');


/*Click event Open City Selection Window*/
toggleMenu.addEventListener('click', function set(){
    closeMenu();
});

/*Click event clear City localstorage*/
citySubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    closeMenu();
/*If localstorage empty create object holder*/
    if(localStorage.getItem('cities') == null){
        localStorage.setItem('cities', `[]`);
    }
/*Pull localstorage*/
    let previousCities = JSON.parse(localStorage.getItem('cities'));
    let city = cityInput.value;
    let sameCity = city;
/*Filter storage for any repeats*/
    function removeMatchingCity(arr, value){
        return arr.filter(function(element){
            return element != value;  /*if not equal to a repeat return to array*/
        })
    }

    let noMatchingCities = removeMatchingCity(previousCities, sameCity);
    noMatchingCities.unshift(city);
    localStorage.setItem('cities', JSON.stringify(noMatchingCities));
});

/*Clear cities from localstorage.*/
clearStorage.addEventListener('click', function(){
    localStorage.removeItem('cities');
});

/*Function is two way. Opens and closes menu while changing attribute values*/
/*Run by two eventlisteners- toggleMenu and citySubmit*/
function closeMenu(){
    const openMenu = selectionBox.getAttribute('data-visible');
    toggleMenu.getAttribute('aria-expanded');
    if(openMenu === 'false'){
        selectionBox.setAttribute('data-visible', true);
        toggleMenu.setAttribute('aria-expanded', true);
        selectionBox.setAttribute('aria-expanded', true);
    }else if(openMenu === 'true'){
        selectionBox.setAttribute('data-visible', false);
        toggleMenu.setAttribute('aria-expanded', false);
        selectionBox.setAttribute('aria-expanded', false);
    }
}

let citySearch = JSON.parse(localStorage.getItem('cities'));
let myKey = '&appid=002e02371bc693eda7b161253481e4e0';
let geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
let cityCountry = 'q=' + citySearch[0] + ',US';
let limitCity = '&limit=1';

let getCoords = geoUrl + cityCountry + limitCity + myKey;


