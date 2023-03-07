import React from 'react';
import Loader from './components/Loader/Loader';
import Message from './components/Message/Message';
import ButtonMode from './components/ButtonMode/ButtonMode';
import Cards from './components/Card/Cards';
// import backgrounds from ''
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-zinc-800 w-full h-full gap-2" style={{
    backgroundImage: `url('https://cdn.pixabay.com/photo/2012/12/27/19/40/snow-72741_1280.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition:"center"
    }}>
      <ButtonMode />
      <h1>City, Country</h1>
      <Cards />
    {/* <Loader /> */}
    {/* <Message /> */}
    </div>
  );
};

export default App;
