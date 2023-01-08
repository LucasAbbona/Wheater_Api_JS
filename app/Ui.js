export class Ui{
    constructor(){
        this.location = document.getElementById("weather-location");
        this.desc = document.getElementById("weather-description");
        this.string = document.getElementById("weather-string");
        this.humy = document.getElementById("wheater-humidity");
        this.wind = document.getElementById("wheater-wind");
    }
    render(weather){
        this.location.textContent = weather.name + '/' + weather.sys.country;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent=weather.main.temp + "°C";
        this.humy.textContent="Humidity: "+weather.main.humidity+"%";
        this.wind.textContent="Speed: "+weather.wind.speed+"m/s";
    }
}