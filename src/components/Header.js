import { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearConsume } from "../actions/consume";
import "./Header.css";

const weekCals = [1500, 1600, 1500, 1990, 1500, 1600, 1990];
class Header extends Component {
  constructor(props) {
    super(props);
    this.todayCal = weekCals[new Date().getDay()];
    this.state = {
      today: this.todayCal,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ today: this.todayCal });
    this.props.dispatch(clearConsume());
  };

  render = () => {
    const { today } = this.state;
    const { carb, protein, fat } = this.props;
    const todayConsume = (carb + protein) * 4 + fat * 9;
    const left = today - todayConsume;
    return (
      <div className="nav">
        <h1>Nutritions</h1>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            All Foods
          </NavLink>
          <NavLink to="/add" className="nav-link">
            New Food
          </NavLink>
        </div>
        <form className="total-form" onSubmit={this.onSubmit}>
          <div className="total-description">
            <p>Today: {today}</p>
            <p>Consume: {todayConsume.toFixed(2)}</p>
            <p>Left: {left.toFixed(2)}</p>
          </div>
          <div className="total-control">
            <label htmlFor="carb">carb : </label>
            <input type="text" id="carb" value={carb} disabled />
          </div>
          <div className="total-control">
            <label htmlFor="protein">protein : </label>
            <input type="text" id="protein" value={protein} disabled />
          </div>
          <div className="total-control">
            <label htmlFor="fat">fat : </label>
            <input type="text" id="fat" value={fat} disabled />
          </div>
          <button className="clear">Clear</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = (state) => state.consume;

export default connect(mapStateToProps)(Header);
