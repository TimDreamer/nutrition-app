import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addConsume, substractConsume } from "../actions/consume";
import { removeFood } from "../actions/foods";
import "./Food.css";

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facCarb: 0,
      facProtein: 0,
      facFat: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const factor = e.target.querySelector("#factor").value;
    const matrix = Array.from(e.target.querySelectorAll("input"))
      .filter((_) => _.id !== "factor")
      .reduce((acc, data) => {
        acc[data.id] = +(this.props[data.id] * factor).toFixed(2);
        return acc;
      }, {});

    // Updates
    this.setState(() => ({
      facCarb: matrix["carb"],
      facProtein: matrix["protein"],
      facFat: matrix["fat"],
    }));
    switch (e.nativeEvent.submitter.className) {
      case "add":
        this.props.dispatch(addConsume(matrix));
        break;
      case "sub":
        this.props.dispatch(substractConsume(matrix));
        break;
      default:
        break;
    }
  };

  render = () => {
    const { imgUrl, title, kcals, carb, protein, fat } = this.props;
    const { facCarb, facProtein, facFat } = this.state;
    return (
      <div className="food">
        <figure>
          <img src={imgUrl} alt="food_img" />
        </figure>
        <div>
          <h2 className="food-title">{title}</h2>
          <div className="food-matrix">
            <p>kcals: {kcals}</p>
            <p>carb: {carb}</p>
            <p>protein: {protein}</p>
            <p>fat: {fat}</p>
          </div>
        </div>
        <div className="food-form-container">
          <form onSubmit={this.onSubmit}>
            <h2>Calculator</h2>
            <div className="food-form-control">
              <label htmlFor="factor">factor : </label>
              <input type="number" id="factor" step="0.01" required />
            </div>
            <div className="food-form-control">
              <label htmlFor="carb">carb : </label>
              <input type="text" id="carb" value={facCarb} disabled />
            </div>
            <div className="food-form-control">
              <label htmlFor="protein">protein : </label>
              <input type="text" id="protein" value={facProtein} disabled />
            </div>
            <div className="food-form-control">
              <label htmlFor="fat">fat : </label>
              <input type="text" id="fat" value={facFat} disabled />
            </div>
            <div className="btn-group">
              <button className="add">Add</button>
              <button className="sub">Substract</button>
            </div>
          </form>
          <div className="btn-group">
            <Link to={`/edit?${this.props._id}`} className="edit-link">
              <button className="edit">Edit</button>
            </Link>
            <button
              className="del"
              onClick={() => {
                this.props.dispatch(removeFood({ _id: this.props._id }));
                fetch(`/${this.props._id}`, {
                  method: "delete",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ _id: this.props._id }),
                });
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
}

export default connect()(Food);
