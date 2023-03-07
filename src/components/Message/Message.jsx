import React from 'react'
import cloudRed from '../../assets/cloud-error.svg'
import './Message.css'
const Message = ({messageError}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-zinc-800 w-full h-full gap-2'>
      <img src={cloudRed} alt="" className='cloud'/>
      <h1 className='text-red-600 text-3xl'>Weather App</h1>
      <p className= 'textError'>Indica que el cliente ha intentado acceder a un recurso al que no tiene acceso. Podría producirse si el usuario que accede al recurso remoto no tiene privilegios suficientes; por ejemplo, con el rol WBERestApiUsers o WBERestApiPrivilegedUsers. Los usuarios que intenten acceder a proyectos de sucesos privados que son propiedad de otros podrían recibir también este error, pero solo si tienen el rol WBERestApiUsers en lugar de WBERestApiPrivilegedUsers.</p>
    </div>
  )
}

export default Message
