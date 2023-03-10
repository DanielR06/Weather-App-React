import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import ButtonMode from './components/ButtonMode/ButtonMode';
import Cards from './components/Cards/Cards';
import ButtonGrade from './components/ButtonGrade/ButtonGrade';
import backgrounds from './assets/backgrounds.json'
import axios from 'axios'; 
const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('C');
  const [grade, setGrade] = useState('metric')

  function toggleUnit() {
    if (unit === 'C') {
      setUnit('F');
      setGrade('imperial');
    } else {
      setUnit('C');
      setGrade('metric');
    }
  };

  useEffect(() =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=faa1c50e8aeff346078b9f75acfbf63d&units=${grade}&lang=es`;
  
  const getWeather = async () => {
    try {
      const res = await axios.get(url);
      setWeatherData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() =>{
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude, grade]);
  const description = weatherData?.weather?.[0]?.description;
  const icon = weatherData?.weather?.[0]?.icon;
  const temperature = weatherData?.main?.temp;
  const pressure = weatherData?.pressure;
  const wind = weatherData?.wind?.speed;
  const rain = weatherData?.rain?.["1h"]; 
  return (
    
    <div className="flex flex-col justify-center items-center bg-zinc-800 w-full h-full gap-2" style={{
    backgroundImage: `url(${backgrounds.clearSky})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:"center"
    }}>
      
      
      {weatherData ? (
      <div className='flex flex-col justify-center items-center gap-2'>
      {/* <ButtonMode /> */}
      <h1>{weatherData?.sys.country}, {weatherData?.name}</h1>
      <Cards description={description} icon={icon} temperature={temperature} unit={unit} pressure={pressure} wind={wind} rain={rain}/>
      <ButtonGrade  toggleUnit={toggleUnit}/>
      <p className="font-semibold italic shadow-sm">By Daniel Rodriguez<br></br>Con ?????? En academlo</p>
      </div>
    ) : (
      <Loader />
    )}
    </div>
  );
};

export default App;
