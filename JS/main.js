//assigning general variables

var numbers = /^[0-9]+$/;
var key = '03c33881e2e5600f85fd019355ff5915';

//assigining variables for DOM
let info;
var alt = document.getElementById('alt');
var altbox = document.getElementById('altbox');
var main = document.getElementById('main');
let button2 = document.getElementById('btn2');
let city = document.getElementById('city');
let tempf = document.getElementById('tempf');
let tempk = document.getElementById('tempk');
let tempc = document.getElementById('tempc');
let cond1 = document.getElementById('cond1');
let cond2 = document.getElementById('cond2');
let ic = document.getElementById('ic');

main.style.display = "none";
altbox.style.display = "none";




async function weather() {
    var zip = document.getElementById('zip').value

    if (zip.length == 5 && zip.match(numbers)) {

        await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}`)
            .then((response) => {
                if (!response.ok) {
                    throw response
                }
                return response.json();

            })
            .then((info) => {

                console.log(info);

                altbox.style.display = "none";
                main.style.display = "block";

                city.innerHTML = info.name;
                tempk.innerHTML = `${Math.floor(info.main.temp)} <sup>o</sup>K`;
                tempc.innerHTML = `${Math.floor(info.main.temp - 273.15)}  <sup>o</sup>C`;
                tempf.innerHTML = `${Math.floor(((info.main.temp - 273.15) * 9 / 5 + 32))}  <sup>o</sup>F`;
                cond1.innerHTML = info.weather[0].main;
                cond2.innerHTML = info.weather[0].description;
                ic.innerHTML =`<img src= "http://openweathermap.org/img/w/${info.weather[0].icon}.png" height=100px  width=100px>`;

            })
            .catch((error) => {
                console.log(error);
                error.text().then((errMessage) => {
                    errMessage = JSON.parse(errMessage);
                    console.log(errMessage);
                    console.log(errMessage.message);
                    altbox.style.display = "block";
                    alt.innerHTML = errMessage.message;
                })
            })
    }

    else if (zip.length == 0) {
        altbox.style.display = "block"
        alt.innerHTML = 'Please enter your zipcode'
    }

    else {
        alt.innerHTML = ('The zip code you entered is invalid')
        altbox.style.display = "block"
    }

}

button2.onclick = weather;


// $("#zip"),keydown(weather);
