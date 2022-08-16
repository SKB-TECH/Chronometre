import React from 'react';
import Timer from './components/Timer';
import './index.css';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center p-50'>
       <Timer/>
    </div>
  );
};

export default App;