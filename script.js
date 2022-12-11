/*What I'm working with*/
/*Provided in Challenge READme*/
/*https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys*/

/*Openweathermap.org*/
/*Geocoding API:   http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}*/
/*5Day/3Hour forecast API:  api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}*/
/*Current Weather API:  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}*/
//ISO 3166-2:US
const myKey = '&appid=002e02371bc693eda7b161253481e4e0';


/* target variables*/
const bgImage = document.getElementById('img-Change');
const selectionBox = document.getElementById('Selection');
const toggleMenu = document.getElementById('myButton-OpenClose');
const citySubmit = document.getElementById('user-Selected');
const cityInput = document.querySelector('#city-Input');
const listCitySearch = document.getElementById('list-City-Search');
const clearStorage = document.getElementById('clear');
var cityList; /*claimed up here to be used in another function*/

/*Opening with no localstorage*/
window.onload = function(){
    bgImage.setAttribute('style', 'display: none;');

    if(localStorage.getItem('cities') == null){
        cityMenu(); 
    }else{
        bgImage.setAttribute('style', 'display: block;');
        cityHistory();
    }
}

/*Click event Open City Selection Window*/
toggleMenu.addEventListener('click', function set(){
    cityMenu();
});

/*Click event clear City localstorage*/
citySubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    cityMenu();
    let city = cityInput.value;
    getCityInfo(city);
    bgImage.setAttribute('style', 'display: block;');   /*background images shows after city selection*/

});

/*Click event Clear cities from localstorage.*/
clearStorage.addEventListener('click', function(){
    localStorage.removeItem('cities');
});

/*Function is two way. Opens and closes menu while changing attribute values*/
/*Run by two eventlisteners- toggleMenu and citySubmit*/
function cityMenu(){
    const openMenu = selectionBox.getAttribute('data-visible'); /*elements have data values to be changed and this one actually opens the city search*/
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

/*Search for City coordinates.  Also changes input to City State info from key for storage*/
let getCityInfo = function(city){
    let geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
    let cityCountry = 'q=' + city + ',US';
    let limitCity = '&limit=1';
    let url = geoUrl + cityCountry + limitCity + myKey;


    fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

        let cityState = data[0].name + ', ' + data[0].state;
        let lat = data[0].lat;
        let lon = data[0].lon;
        cityStorage(cityState);
    });

}

/*LocalStorage function to save searched cities*/
function cityStorage(cityState){
    if(localStorage.getItem('cities') == null){  /*If localstorage empty create object holder*/
    localStorage.setItem('cities', `[]`);
}

let previousCities = JSON.parse(localStorage.getItem('cities')); /*Pull localstorage*/

console.log(cityState, 'storage');
let sameCity = cityState;

function removeMatchingCity(arr, value){ /*Filter storage for any repeats*/
    return arr.filter(function(element){

        return element != value;  /*if not equal to a repeat return to array*/
    })
}
let noMatchingCities = removeMatchingCity(previousCities, sameCity);/*variable is the function above of a return array*/

    noMatchingCities.unshift(cityState); /*unshift used to keep last city added at 0 index*/
    localStorage.setItem('cities', JSON.stringify(noMatchingCities));/*placing the changed array back into localstorage*/
cityHistory();

}

/*Append city search history*/
function cityHistory(){
    while(listCitySearch.firstChild){   /*removes previous appended cities in history*/
        listCitySearch.removeChild(listCitySearch.firstChild);
    }

    let cityRecord = JSON.parse(localStorage.getItem('cities'));

    for(let i = 0; i < cityRecord.length; i++){ /*appends new cities based on localstorage*/
        cityList = document.createElement('p');
        cityList.classList.add('myP');
        cityList.innerHTML = cityRecord[i];
        listCitySearch.append(cityList);
        localStorage.setItem('cities', JSON.stringify(cityRecord)); /*can you comment back? do i have to put storage back?  i couldnt find an answer.  i'm sure i only have to when changing the values.*/
    }
}






