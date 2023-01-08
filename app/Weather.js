export class Weather{
    constructor(city,cc){
        this.Apikey="c183bbe3cdac5cae728ee9b0dd79255f",
        this.city=city,
        this.countrycode=cc;
    }
    async getWeather(){
        const Url=`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countrycode}&APPID=${this.Apikey
    }&units=metric`;
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    }
    changeLocation(city,countrycode){
        this.city=city;
        this.countrycode=countrycode;
    }
}