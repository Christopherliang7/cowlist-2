import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Spotlight extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      updating: false,
      spotlight: props.spotlight
    }

    this.updateCow = this.updateCow.bind(this);
    this.changeSpotlightName = this.changeSpotlightName.bind(this);
    this.changeSpotlightDescription = this.changeSpotlightDescription.bind(this);
  }

  // onChange() {
  //   this.setState({spotlight: this.props.spotlight})
  //   console.log('This is the onChange: ',this.state)
  // }

  updateCow(event) {
    event.preventDefault();
    axios
      .put(`/api/cows/${this.state.spotlight.id}`, this.state.spotlight)
      .then(() => {
        console.log("Successfully Updated Cow!");
      })
      .then(() => this.setState({updating: false}))
      .then(() => this.props.getCows())
      .catch((err) => {
        console.log("Error with updating cow: ", err);
    });
  }

  changeSpotlightName(event) {
    let spotlightCow = this.props.spotlight;
    spotlightCow.cow_name = event.target.value;
    this.setState({
      spotlight: spotlightCow,
    });
  }

  changeSpotlightDescription(event) {
    let spotlightCow = this.props.spotlight;
    spotlightCow.cow_description = event.target.value;
    this.setState({
      spotlight: spotlightCow,
    });
  }

  render() {
    return (
      <div>
          <h2>Cow Spotlight:</h2>
          {this.state.updating ? (
            <div>
              <form onSubmit={(event) => this.updateCow(event)}>
                <input
                  type="text"
                  name="cow_name"
                  placeholder="Name"
                  onChange={this.changeSpotlightName}
                />
                <textarea
                  type="text"
                  name="cow_description"
                  placeholder="Description"
                  onChange={this.changeSpotlightDescription}
                />
                <input type="submit" />
              </form>
            </div>
          ) : (
            <>
              {this.props.spotlight.cow_name}
              {this.props.spotlight.cow_description}
              <button onClick={() => this.setState({ updating: true })}>
                Update
              </button>
            </>
          )}

          {/* <button onClick={() => this.updateCow()}>Submit</button> */}
      </div>
    )
  }
}

export default Spotlight;