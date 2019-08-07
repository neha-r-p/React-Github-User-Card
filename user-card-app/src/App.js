import React from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      followers: []
    };
  }

  componentWillMount() {
    console.log("mounted");
    this.fetchUser();
    this.fetchFollowers();
  }

  fetchUser = () => {
    axios
      .get("https://api.github.com/users/neha-r-p")
      .then(res => {
        console.log(res.data);
        this.setState({ userInfo: res.data });
      })
      .catch(err => {
        console.log(err);
      }) 
  }

  fetchFollowers = () => {
    axios
    .get("https://api.github.com/users/neha-r-p/followers")
    .then(res => {
      console.log(res.data);
      this.setState({ followers: res.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Github User Card</h1>
        <UserCard userInfo={this.state.userInfo} />
      </div>
    );
  }
}

export default App;
