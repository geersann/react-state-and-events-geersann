import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    isUpperCase: false
  };

  toggleCase = () => {
    this.setState(prevState => ({
      isUpperCase: !prevState.isUpperCase,
    }))
  }

  render() {
    const text = "React Marathon"
    const displayText = this.state.isUpperCase ? text.toUpperCase() : text.toLowerCase();
    return <div onClick={this.toggleCase}>
      {displayText}
    </div>    
  }
}
