import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Spotlight from './components/spotlight.jsx'
import CowList from './components/cowList.jsx'
import CreateCow from './components/createCow.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      spotlight: "",
    };

    
    this.getCows = this.getCows.bind(this);
    this.showCow = this.showCow.bind(this);


  }


  // ===========================Get Cow Data=============================================

  componentDidMount() {
    this.getCows();
  }

  getCows() {
    axios
      .get("/api/cows")
      .then((result) => {
        this.setState({
          cows: result.data,
        });
      })
      .then(() => {
        console.log(this.state.cows);
      })
      .catch((err) => {
        console.log("Error with getting cows: ", err);
      });
  }

  // ===========================Spotlight=============================================

  showCow(cow) {
    console.log(cow);
    this.setState({ spotlight: cow });
  }

  render() {
    return (
      <div>
        <h1>This is my Cow page!</h1>
        <Spotlight spotlight={this.state.spotlight} getCows={this.getCows}/>
        <CreateCow getCows={this.getCows}/>
        <CowList showCow={this.showCow} cows={this.state.cows}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
