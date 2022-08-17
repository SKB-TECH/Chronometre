import React from 'react';
import Timer from './components/Timer';
import './index.css';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center p-30 bg-blue-400'>
       <Timer/>
    </div>
  );
};

export default App;