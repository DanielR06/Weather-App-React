import React, { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Message from './components/Message/Message';
import ButtonMode from './components/ButtonMode/ButtonMode';
import Cards from './components/Cards/Cards';
import ButtonGrade from './components/ButtonGrade/ButtonGrade';
import backgrounds from './assets/backgrounds.json'
import axios from 'axios'; 
const App = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=faa1c50e8aeff346078b9f75acfbf63d`
  
  const getWeather = async () => {
    try {
      const res = await axios.get(url);

      console.log(res.data);

    } catch (error) {
      console.log(error);
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

    
    getWeather();

  }, []);
  return (
    
    <div className="flex flex-col justify-center items-center bg-zinc-800 w-full h-full gap-2" style={{
    backgroundImage: `url(${backgrounds.clearSky})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:"center"
    }}>
      <ButtonMode />
      <h1>City, Country</h1>
      <Cards />
      <ButtonGrade />
    {/* <Loader /> */}
    {/* <Message /> */}
    </div>
  );
};

export default App;
