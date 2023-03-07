import React from 'react'
import cloud from '../../assets/cloud-loader.svg'
import './Loader.css'
const Loader = () => {
  return (
    <div className='Loader flex flex-col justify-center items-center bg-zinc-800 w-full h-full gap-2'>
      <img src={cloud} alt="" className='cloud'/>
      <h1 className='text-white text-3xl'>Weather App</h1>
      <div className="progres_bar">
        <span className='progres'></span>
      </div>
    </div>
  )
}

export default Loader
