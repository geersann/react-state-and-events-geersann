import React from 'react';
import './App.css';

export default class App extends React.Component {
    state = {
      appData: 'React Marathon',
      isUpperCase: false 
    };

  handleClick = () => {
    this.setState(prevState => ({
      isUpperCase: !prevState.isUpperCase
    }));
  };

  render() {
    const switchCase = this.state.isUpperCase
    ? this.state.appData.toUpperCase()
    : this.state.appData.toLowerCase();
    return (
      <div onClick={this.handleClick}>
        {switchCase}
      </div>
    );
  }
}