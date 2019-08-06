import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userCards: []
    }
  }

  componentWillMount() {
    console.log('mounted')
  }

  render(){
    return (
    <div className="App">
     <h1>React Github User Card</h1>
    </div>
  );
  }

}

export default App;
