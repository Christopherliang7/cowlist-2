import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CreateCow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cow_name: "",
      cow_description: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  // ===========================Submit To Database=============================================
  handleSubmit(event) {
    // console.log(this.state)
    event.preventDefault();
    axios
      .post("/api/cows", {
        cow_name: this.state.cow_name,
        cow_description: this.state.cow_description,
      })
      .then((result) => {
        console.log(result);
      })
      .then(() => {
        this.props.getCows();
      })
      .catch((err) => {
        console.log("Error with HandleSubmit: ", err);
      });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2>Tell us about your cow:</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            name="cow_name"
            placeholder="Name"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="cow_description"
            placeholder="Description"
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateCow;