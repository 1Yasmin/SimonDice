import React from 'react';

import Light from '../Light';
import './trafficlight.css';


const TrafficLight = ({
  colors = ['red', 'yellow', 'green'],
  turnedOnLight = 'red',
  size = 'medium',
  option = (colorOn)=>{},
}) => (
  <div className="trafficLight">
    {
      colors.map(
        color => (
          <Light
            key={color}
            color={color}
            size={size}
            isTurnedOn={color === turnedOnLight}
            option = {option}
          />
        )
      )
    }
  </div>
);


export default TrafficLight;
