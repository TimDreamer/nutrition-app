import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addConsume, substractConsume } from "../actions";
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
        this.props.addConsume(matrix);
        break;
      case "sub":
        this.props.substractConsume(matrix);
        break;
      default:
        break;
    }
  };

  renderInputText(desp, val) {
    return (
      <div className="food-form-control">
        <label htmlFor={desp}>{desp} : </label>
        <input type="text" id={desp} value={val} disabled />
      </div>
    );
  }

  renderInputNumber(desp, step = 1) {
    return (
      <div className="food-form-control">
        <label htmlFor={desp}>{desp} : </label>
        <input type="number" id={desp} step={`${step}`} required />
      </div>
    );
  }

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
            {this.renderInputNumber("factor", 0.01)}
            {this.renderInputText("carb", facCarb)}
            {this.renderInputText("protein", facProtein)}
            {this.renderInputText("fat", facFat)}
            <div className="btn-group">
              <button className="add">Add</button>
              <button className="sub">Substract</button>
            </div>
          </form>
          <div className="btn-group">
            <Link to={`/edit/${this.props.id}`} className="edit">
              Edit
            </Link>
            <Link to={`/delete/${this.props.id}`} className="del">
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  };
}

export default connect(null, {
  addConsume,
  substractConsume,
})(Food);
