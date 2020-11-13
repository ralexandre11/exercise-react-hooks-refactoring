import React, { useContext } from 'react';
import CarsContext from './context/CarsContext';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

function TrafficSignal() {
  const { signal, changeState } = useContext(CarsContext);
  return (
    <div>
      <div className="button-container">
        <button onClick={() => changeState('signal', 'red')} type="button">
          Red
        </button>
        <button onClick={() => changeState('signal', 'yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => changeState('signal', 'green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signal)} alt="" />
    </div>
  );
};

TrafficSignal.contextType = CarsContext;

export default TrafficSignal;
