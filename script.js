/*https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys*/
/*Openweathermap.org*/


/* target variables*/
const selectionBox = document.getElementById('Selection');
const toggleMenu = document.getElementById('myButton-OpenClose');


/*Click event Open City Selection Window*/
toggleMenu.addEventListener('click', function(){
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
});

const citySubmit = document.getElementById('city-btn');
const cityInput = document.querySelector('#city-Input').value;

citySubmit.addEventListener('submit', function(event) {
    console.log("YOU CLICKED IT!");
    event.preventDefault();

    // if(localStorage.getItem('cities') == null){
    //     localStorage.setItem('cities', `[]`);
    // }

    // let city = cityInput;

    // let previousCities = JSON.parse(localStorage.getItem('cities'));
    // previousCities.push(city);
    // localStorage.setItem('cities', JSON.stringify(previousCities));
});

// let citySearch = json.parse(localStorage.getItem('cities'[0]));
// let myKey = 'appid=002e02371bc693eda7b161253481e4e0';
// let geoUrl = 'http://api.openweathermap.org/geo/1.0/direct?';
// let cityCountry = 'q=' + citySearch + ',US';
// let limitCity = '&limit=5';
// let cityFile = geoUrl + cityCountry + limitCity + myKey;


//city state lon lat http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//weather http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//geoloc http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//ISO 3166-2:US



































