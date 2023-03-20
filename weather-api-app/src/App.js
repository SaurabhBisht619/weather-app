import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function App() {

  const APIKEY = "f56f24967aaf51182d1d4df628297c6d";
  const[city,setCity] = useState("");   //User provide this data
  const[data,setData] = useState({});   //API provide this data

  const getWeather=(city)=>{
    if(!city) return;
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKEY;
    axios.get(apiURL).then((res)=>{setData(res.data)});
  }


  const handleCity = (e)=>{
    setCity(e.target.value);
  }

  const handleSearch = ()=>{
    getWeather(city);
  }

  return (
    <div className='col-md-12'>

        <div className="wetherBg">
            <h1 className="heading">Weather App</h1>
                <input type="text" className='inp' value={city} onChange={handleCity} placeholder='Search here by City name' />
                <button className="btn btn-primary" onClick={handleSearch}>Search</button>
        </div>

        {
          Object.keys(data).length>0 &&
          <div className="col-md-12 text-center mt-5">
                <div className="shadow rounded box">
                       <img className='weatherIcon' src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" alt="" />
                       <h3 className="weatherCity">{data.name}</h3>
                       <div className="weatherTemp">{((data.main.temp)-273).toFixed(2)}℃</div>
                </div>
        </div>

        }
        
    
    </div>
  )
}

export default App;