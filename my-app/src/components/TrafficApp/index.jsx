import React, { } from 'react';
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
    this._validSequence = this._validSequence.bind(this);
    this._paint = this._paint.bind(this);
    this._start = this._start.bind(this);
  }
  
  _start() {
    (new Promise(function(resolve, reject) {
  })).then(function () {
      console.log("Promise succeeded");
  }, function () {
      console.log("Promise failed");
  });
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

      this.setState({
        times: times +1,
        player: true,
      })
      this._drawSequence();
  
      
      console.log(this.state);
    }
  }

  _drawSequence() {
    console.log("drawing")
    let {sequence } = this.state;
    for (let i = 0; i < sequence.length; i += 1) {
      setTimeout(() => {
        this.setState({
          turnedOnLight: sequence[i],
        });
      }, (i + 1) * 1000);
    }

    setTimeout(() => {
      this.setState({
        turnedOnLight: null,
      });
    }, 2000);

    this._paint();
    console.log("call paint");
  }

  _validSequence(){
    console.log("validando")
    if(this.state.sequence.length === this.state.playerSequence.length){
      for(let i = 0; i < this.state.sequence.length; i +=1){
        if(this.state.sequence[i] !== this.state.playerSequence[i]){
          alert("Lo siento, has perdido");
          this.setState({
            sequence: [],
            playerSequence: [],
            player: false,
          })
        }
        else{
          this.setState({
            playerSequence: [],
            player: false,
          })
          console.log("nueva ronda");
          this._changeLight();
        }
      }
    }

  }

  _paint(colorOn){
    const {playerSequence, player} = this.state;
    if(player === true){
      playerSequence.push(colorOn);
      setTimeout(()=> this.setState({turnedOnLight: colorOn, playerSequence: playerSequence}),500);
      setTimeout(() => this.setState({
        turnedOnLight: null} ),800);

      this._validSequence();
      console.log("validar");
    }

  }

  render() {
    return (
    <div>
      <TrafficLight
        colors = {this.state.colors}
        turnedOnLight = {this.state.turnedOnLight}
        size = {this.state.size}  
        option = {this._paint}
         />
      <button onClick={this._start}>
        Start</button>
    </div>);
    }
}


export default TrafficApp;


