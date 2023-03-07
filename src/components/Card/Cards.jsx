import React from 'react';
import './Cards.css';
import testClima from '../../assets/snow.svg'
import windIcon from '../../assets/wind-icon.svg'
import rainIcon from '../../assets/rain-icon.svg'
import pressureIcon from '../../assets/pressure-icon.svg'
const Cards = () => {
  return (
    <div className="cards">
      <div className="principal__card">
        <h3>Clima*</h3>
        <div className='sub__card'>
          <h2>24°</h2>
          <img src={testClima} alt="" />
        </div>
      </div>
      <div className="temperatures__card">
        <div className='container__icons'>
          <img src={windIcon} alt="" className='icon'/>
          <p>24°</p>
        </div>
        <div className='line'></div>
        <div className='container__icons'>
          <img src={rainIcon} alt="" className='icon'/>
          <p>24°</p>
        </div>
        <div className='line'></div>
        <div className='container__icons'>
          <img src={pressureIcon} alt="" className='icon'/>
          <p>24°</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
