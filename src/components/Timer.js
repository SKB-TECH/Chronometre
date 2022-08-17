import { React, useState, useEffect } from "react";
import { FaPlay, FaStopCircle } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {useContext,createContext} from 'react'


const Context=createContext();


let temps = 0;
const Timer = () => {
  const [brek, setBrek] = useState(5);
  const [len, setlen] = useState(25);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(25);
  const [actif, setActif] = useState(true);

  // Function for to add an mines break session
  const breaking = () => {
    setBrek(brek + 1);
  };
  const stopbreaking = () => {
    brek !== 0 && setBrek(brek - 1);
  };

  // Function for to increment and decremente length session
  const Addlength = () => {
    if(actif){
      setlen(len + 1);
      setMin((min) => min + 1);
    }
  };
  const MinesSession = () => {
    if(actif){
      len !== 0 && setlen(len - 1);
      min !== 0 && setMin((min) => min - 1);
    }
  };

  const Stopper = () => {
    if (!actif) {
      clearInterval(temps);
      setActif(true);
    } else {
      return null;
    }
  };
  // Functions to turn the watch
  useEffect(() => {
    setSec(0);
  }, []);

  const Lancement = () => { 
    if (sec === 0) {
      setSec((sec) => sec + 59);
    }
    temps = setInterval(() => {
      setSec((sec) => {
        let to = sec - 1;
        if (to === 0 && min !== 0) 
          {
            to = 59;
              if (0 < min) {
                setMin((min) => min - (0.5));
              } 
              else if(min===0 && sec===0){
                setMin((min)=>min+(brek));
                setMin((sec)=>sec+59);
              }
              else{
                setMin((min)=>min+25)
                setMin((sec)=>sec+59);
              }
          } 
        return to;
      });
    }, 1000);
    
    setActif(false);
  };
  // const Stopped = () => {

  // };

  const Reset = () => {
    setSec(0);
    setMin(25);
    setlen(25);
    setBrek(5);
    Stopper();
  };

  return (
    <div
      className="flex flex-col justify-between gap-4 
        items-center w-2/4 h-6/8 border-5 bg-gray-100  my-56 shadow-lg rounded-full"
    >
      {/* Les commandes pour augmentation des munites et Sessions */}
      <div className="flex justify-between gap-20 bg-blue-500 w-full text-white shadow-lg text-2xl">
        <div>
          <h2>Break</h2>
          <hr />
          <div className="flex justify-between">
            <button type="button" onClick={breaking}>
              <BsPlusLg />
            </button>
            <span>{brek}</span>
            <button type="button" onClick={stopbreaking}>
              <AiOutlineMinus />
            </button>
          </div>
        </div>
        <h5 className="text-xl">Session</h5>
        <div>
          <h5>Lenght</h5>
          <hr />
          <div className="flex justify-between">
            <button type="button" onClick={Addlength}>
              <BsPlusLg />
            </button>
            <span>{len}</span>
            <button type="button" onClick={MinesSession}>
              <AiOutlineMinus />
            </button>
          </div>
        </div>
      </div>

      {/* le compteur  */}
      <div className="flex text-5xl justify-center items-center border-2">
        <div>{min < 10 ? "0" + min : min}</div>:
        <div>{sec < 10 ? "0" + sec : sec}</div>
      </div>

      {/* les commandes stop play and reset */}
      <div className="flex justify-around gap-6 text-3xl mt-3  bg-blue-500 w-full text-white shadow-lg text-xl">
        <button type="button" onClick={Lancement}>
          <FaPlay />
        </button>
        <button onClick={Stopper}>
          <FaStopCircle />
        </button>
        <button onClick={Reset}>
          <BiReset />
        </button>
      </div>
    </div>
  );
};

export default Timer;
