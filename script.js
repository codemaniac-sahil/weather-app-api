
document.getElementById("data").addEventListener("keyup", function (event) {
  event.preventDefault();
  let input = document.getElementById("data");
  if (event.keyCode === 13) {
    if (input.value == "") {
      alert("Enter city name!!")
    } else {
      document.getElementById("tap").click();
      input.blur();
    }
  }
});

function add_city() {
  let cityname = document.getElementById("data").value; //Getting city name from user
  api_url1 = "https://api.openweathermap.org/data/2.5/weather?q=";
  api_url2 = cityname;
  api_url3 = "&appid=db8788ed4e52495bf8a51ae0a8e4caff&units=metric";
  full_api = api_url1 + api_url2 + api_url3; //Generating URL for entered city

  //If user did not input the city
  let input = document.getElementById("data");
  if (input.value == "") {
    alert("Enter city name!!")
  } else {
    async function get_data() {
        const resultContainer = document.getElementById('display-data-container');
        resultContainer.classList.add('display-data-container');
      try {
        const response = await fetch(full_api); //Fetching data from API
        const data = await response.json(); //Converting data to json format
        tempe = data.main.temp;
        city = data.name;
        country = data.sys.country;
        weather_condition = data.weather[0].main;
        pressure = data.main.pressure;
        humidity = data.main.humidity;
        windSpeed = data.wind.speed;
        
        cityName = `<p> <b>City :</b> ${city}, ${country}</p>`;
        weatCond = `<p> <b>Weather condition :</b> ${weather_condition}</p>`;
        temp = `<p> <b>Temperature :</b> ${tempe}&#8451</p>`;
        press = `<p> <b>Pressure :</b> ${pressure} hPa</p>`;
        hum = `<p> <b>Humidity :</b> ${humidity}%</p>`;
        windSpd = `<p> <b>Wind speed :</b> ${windSpeed}</p>`;
        place = `<p> <b>Weather in </b> ${city}</p>`;

        document.getElementById("cityName").innerHTML = cityName;
        document.getElementById("weatherCondition").innerHTML = weatCond;
        document.getElementById("temperature").innerHTML = temp;
        document.getElementById("pressure").innerHTML = press;
        document.getElementById("humidity").innerHTML = hum;
        document.getElementById("windSpeed").innerHTML = windSpd;
        document.getElementById("plc").innerHTML = place;

        if (weather_condition == "Clouds") {
          document.body.style =
            "background-image:repeating-linear-gradient(lightblue,white); ";
        } else if (weather_condition == "Thunderstorm") {
          document.body.style =
            "background-image:repeating-linear-gradient(white,gray);";
        } else if (weather_condition == "Rain") {
          document.body.style =
            "background-image:repeating-linear-gradient(lightblue,darkblue);";
        } else if (weather_condition == "Snow") {
          document.body.style =
            "background-image:repeating-linear-gradient(#edebeb , #fffcfc);";
        } else if (weather_condition == "Clear"){
        document.body.style =
        "background-image:repeating-linear-gradient(rgb(234,232,1),rgb(252,245,237));";
        }else {
          document.body.style =
            "background-image:repeating-linear-gradient(#edebeb , #fffcfc)";
        }
      } catch (err) {
        document.getElementById("cityName").innerHTML = `<p style="color: red; font-weight: bolder; display:flex; justify-content: center;">Please enter a valid location</b></p>`;
        document.getElementById("weatherCondition").innerHTML = '';
        document.getElementById("temperature").innerHTML = '';
        document.getElementById("pressure").innerHTML = '';
        document.getElementById("humidity").innerHTML = '';
        document.getElementById("windSpeed").innerHTML = '';
        document.body.style =
          "background-image:repeating-linear-gradient(#edebeb , #fffcfc)";
      }
    }
    get_data();
  }
}
let mybutton1 = document.getElementById("btn1");
window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton1.style.display = "block";
  } else {
    mybutton1.style.display = "none";
  }
}
function TopFunc() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.onload = function() {    
    const resultContainer = document.getElementById('display-data-container');
    resultContainer.classList.remove('display-data-container');
};
var tog=document.getElementById("theme-toggle");
var stheme= localStorage.getItem('theme')||(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (stheme)
    document.documentElement.setAttribute('data-theme', stheme)
tog.onclick=function toggle(){
    var ctheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";
    if (ctheme === "light") {
        targetTheme = "dark";
    }
    else if (ctheme === "dark"){
        targetTheme = "light";
    }
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
};
