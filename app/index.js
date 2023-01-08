import { Weather } from "./Weather.js";
import { Ui } from "./Ui.js";
const ui= new Ui();
const weather = new Weather("new york","us");
async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
    console.log(data)
}
document.getElementById("w-change-btn").addEventListener('click',(e)=>{
    const city = document.querySelector("#city").value;
    const cc = document.querySelector("#countryCode").value;
    weather.changeLocation(city,cc);
    fetchWeather();
    e.preventDefault();
})
document.addEventListener('DOMContentLoaded',fetchWeather)