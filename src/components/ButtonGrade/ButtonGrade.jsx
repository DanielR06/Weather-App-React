import React,{useState} from 'react'
import './ButtonGrade.css'
const ButtonGrade = (props) => {
  const [unit, setUnit] = useState('C');
  
  function toggleUnit2() {
    setUnit(prevUnit => (prevUnit === 'C' ? 'F' : 'C'));
  };
  
  return (
   <button className='button' onClick={() => {props.toggleUnit(); toggleUnit2();}}>Cambiar a °{unit}</button>
  )
}

export default ButtonGrade
