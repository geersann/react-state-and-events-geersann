import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    appData: 'React Marathon',
  };

  handleClick = () => {
    this.setState(prevState => ({
      appData: prevState.appData.toLowerCase()
    }))
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.appData}
      </div>
    );
  }
}