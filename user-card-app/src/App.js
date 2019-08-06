import React from 'react';
import axios from 'axios';
import UserCard from './Components/UserCard'

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
    axios.get('https://api.github.com/users/neha-r-p')
    .then(res => {
      console.log(res.data)
      this.setState({userCards: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
    <div className="App">
     <h1>React Github User Card</h1>
     <UserCard userCards={this.state.userCards} />
    </div>
  );
  }

}

export default App;
