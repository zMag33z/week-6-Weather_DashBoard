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
})




// var citySelection;


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citySelection + "&appid=" + WeatherKey;













//if(depending on weather output change image accordingly)
// constmediaQuery = window.matchMedia('(whatever the width call is ex: min-width- 600px)')
// if(mediaQuery.matches){
//     //do this stuff
// }



















// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


