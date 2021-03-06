function add_city(){
let cityname=document.getElementById("data").value;          //Getting city name from user 
api_url1="https://api.openweathermap.org/data/2.5/weather?q=";
api_url2=cityname;
api_url3="&appid=db8788ed4e52495bf8a51ae0a8e4caff&units=metric";
full_api=api_url1+api_url2+api_url3;                         //Generating URL for entered city 
    
    //If user did not input the city
if (api_url2==''){
    document.getElementById('use').innerHTML="<p>Please enter the city</p>";
    document.getElementById('use1').innerText='';
    document.getElementById('use2').innerText='';


}
else{

async function get_data(){
const response=await fetch(full_api)            //Fetching data from API
const data=await response.json()                //Converting data to json format
tempe=data.main.temp;                           
city=data.name;
weather_condition=data.weather[0].main;
imp=`<p> City : ${city}</p>`;
imp1=`<p> Weather condition : ${weather_condition}</p>`;
imp2=`<p> ${tempe}&#8451</p>`;

document.getElementById('use').innerHTML=imp;
document.getElementById('use1').innerHTML=imp1;
document.getElementById('use2').innerHTML=imp2;


if(weather_condition=="Clouds"){
    document.body.style="background-image:linear-gradient(lightblue,white);"
}
else if(weather_condition=="Thunderstorm"){
    document.body.style="background-image:linear-gradient(white,gray);"
}
else if(weather_condition=="Rain"){
    document.body.style="background-image:linear-gradient(lightblue,blue);"
}
else if(weather_condition=="Snow"){
    document.body.style="background-image:linear-gradient(#edebeb , #fffcfc);"
}
else{
    document.body.style="background-image:linear-gradient(#edebeb , #fffcfc)";
}



}
get_data()
}
}
