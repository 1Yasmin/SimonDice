import React, { Fragment } from 'react';
import TrafficLight from '../TrafficLight';

class TrafficApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: ['green', 'yellow', 'red', 'blue'],
      turnedOnLight: '',
      times: 1,
      sequence: [],
      player: false,
      playerSequence: [],
    };

      // permite que this trabaje 
    this._changeLight = this._changeLight.bind(this);
    this.render = this.render.bind(this);
    this._drawSequence = this._drawSequence.bind(this);
  }

  _drawSequence() {
    let {sequence } = this.state;
    for (let i = 0; i < sequence.length; i += 1) {
      setTimeout(() => {
        this.setState({
          turnedOnLight: sequence[i],
        });
      }, (i + 1) * 500);
    }
  
    setTimeout(() => {
      this.setState({
        turnedOnLight: null,
      });
    },1000);
  }

  _validSequence(){

  }

  _changeLight() {
    const{sequence, times, player, colors} = this.state;
    if(!player){
      for(let i = 0; i < times; i +=1){
        const colorOn = colors[Math.floor(Math.random() * colors.length)];
        sequence.push(colorOn);
        this.setState({
          sequence: sequence,
        })
      };
      /*
      this.setState({
        times: times +1,
        player: true,
      });*/
      this._drawSequence();
      console.log(this.state);
    }
    
  
  }

  
  render() {
    return (
    <div>
      <TrafficLight
        colors = {this.state.colors}
        turnedOnLight = {this.state.turnedOnLight}
        size = {this.state.size}  />
      <button onClick={this._changeLight}>
        Start Game
      </button>
      
    </div>);
    }
}


export default TrafficApp;


