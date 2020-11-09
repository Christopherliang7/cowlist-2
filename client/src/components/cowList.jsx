import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class CowList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.deleteCow = this.deleteCow.bind(this);
  }

  

  // ===========================Delete=============================================
  deleteCow(id) {
    axios
      .delete(`/api/cows/${id}`)
      .then(() => {
        console.log("Successfully Deleted Cow!");
      })
      .then(() => {
        this.getCows();
      })
      .catch((err) => {
        console.log("Error with deletion: ", err);
      });
  }

  render() {
    return (
      <div>
        <h2>List of cows:</h2>
        <ul>
          {this.props.cows.map((cow) => {
            return (
              <>
                <button onClick={() => this.props.showCow(cow)}>
                  <li key={cow.id}>{cow.cow_name}</li>
                </button>
                <button onClick={() => this.deleteCow(cow.id)}>Delete</button>
              </>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default CowList;