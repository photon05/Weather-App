import React, { useEffect, useState } from "react";
import Search from "../search";
import "../weather";

const Weather = () => {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    // API Key = a0af0654ea53f796b3a2f746d2b2da34

    async function fetchWeatherData(search) {
        setLoading(true);
        try{
            const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a0af0654ea53f796b3a2f746d2b2da34`);

            const data = await response.json();

            if(data){
                setLoading(false);
            }
            setWeatherData(data);

            console.log(data);
        } catch(e){
            console.log(e);
        }
        
    }
    function handleSearch() {
        if(search){
            fetchWeatherData(search);
        }
    }

    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us',{
            weekday: 'long',
            month:'long',
            day:'numeric',
            year:'numeric'
        });
    }

    useEffect(()=>{
        fetchWeatherData("Agra")
    }, []);

    return (
       

        <div className="weather">
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
             <div>
            
            { 
              loading ? (<div className="loader"></div>) : (
            <div className="weather-report">
                <div className="city-name">
                    <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                </div>
                <div className="currentDate">
                    <span>{getCurrentDate()}</span>
                </div>
                <div className="temperature">
                    {Math.ceil(weatherData?.main?.temp-273.15)}
                </div>
                <div className="description">
                    {weatherData?.weather[0].description}
                </div>
                <div className="weather-info">
                    <div className="humidity">
                        <p>Humidity</p>
                        <p>{weatherData?.main?.humidity}</p>
                    </div>
                    <div className="wind">
                        <p>Wind Speed</p>
                        <p>{weatherData?.wind?.speed}</p>
                    </div>
                </div>
            </div>
            )}
        </div>

        </div>
    );
};

export default Weather;
