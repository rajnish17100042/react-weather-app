import React,{useState,useEffect} from 'react';
import '../App.css'

const Weather=()=>{

//take the initial value of the city as null and once response is received then only  we will update it 
const [city,setCity]=useState(null);

const [search,setSearch]=useState("patna");

// const cityName="patna"
const API_KEY="081cf4e24ff5551ca38964a10614f971";
let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;

const getWeatherData=async()=>{
    const res=await fetch(url);
    //convert the response to a json data structure
    const data=await res.json();
    // console.log(res);
    // console.log(data);
    setCity(data.main);
}

useEffect(()=>{
getWeatherData();
},[search])    //every time search value changes useEffect runs


    return(
        <>
       
       
        

<div className="card">
  <h2>Weather App</h2>
  <input type="search" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
   {!city ?(<p>No data to show</p>):
   (<div>
        <h4>Temperature(celsius) in {search} : {city.temp} </h4>
        <h4>Minimum Temperature recorded : {city.temp_min}</h4>
        <h4>Maximum Temperature recorded : {city.temp_max}</h4>
        <h4>Pressure : {city.pressure} hpa</h4>
        <h4>Humidity : {city.humidity}%</h4>
    </div>
   )}
  
  
  
</div>
        </>
    )
}

export default Weather;