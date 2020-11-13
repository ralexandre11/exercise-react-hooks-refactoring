// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider( {children} ) {
  const intitialState = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
    signal: 'red',
  }

  const [ state, setState ] = useState({...intitialState});

  const changeState = (key, value) => {
    setState({...state, [key]: value});
  };

  const contextValue = {
    ...state,
    changeState,
  };

  // changeSignal(const) {
  //   this.setState({
  //     signal: {
  //       ...this.state.signal,
  //       color: signalColor,
  //     },
  //   });
  // };

    return (
      <CarsContext.Provider value={contextValue}>
        {children}
      </CarsContext.Provider>
    );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
