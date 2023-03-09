import React from 'react';
import './Cards.css';
import windIcon from '../../assets/wind-icon.svg'
import rainIcon from '../../assets/rain-icon.svg'
import pressureIcon from '../../assets/pressure-icon.svg'
const Cards = ({temperature, icon, description, pressure, wind, rain}) => {
  const upperDescription = description.toUpperCase()
  const roundedTemperature = Math.round(temperature);
  return (
    <div className="cards">
      <div className="principal__card">
        {description && <h3>{upperDescription}</h3>}
        <div className='sub__card'>
          <h2>{roundedTemperature}°C</h2>
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className='principal__icon'/>
        </div>
      </div>
      <div className="temperatures__card">
        <div className='container__icons'>
          <img src={windIcon} alt="" className='icon'/>
          <p>{wind}</p>
        </div>
        <div className='line'></div>
        <div className='container__icons'>
          <img src={rainIcon} alt="" className='icon'/>
          <p>{rain}</p>
        </div>
        <div className='line'></div>
        <div className='container__icons'>
          <img src={pressureIcon} alt="" className='icon'/>
          <p>{pressure}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
