import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import { loadDB } from "../actions";
import "./FoodForm.css";

class FoodForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.food;
  }

  componentWillMount() {
    if (!this.props.id) return;
    this.props.dispatch(loadDB());
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(this.props.actionCreate(this.state));
  };

  getOnChange = (name) => {
    return (e) => {
      const val = e.target.value;
      this.setState(() => ({ [name]: val }));
    };
  };

  renderFormControl(text, val) {
    return (
      <div className="form-control">
        <label htmlFor={text}>{text} : </label>
        <input
          type={text}
          id={text}
          value={val}
          onChange={this.getOnChange(text)}
          required
        />
      </div>
    );
  }

  render = () => {
    const { title, kcals, carb, protein, fat, imgUrl } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          {this.renderFormControl("title", title)}
          {this.renderFormControl("imgUrl", imgUrl)}
          {this.renderFormControl("kcals", kcals)}
          {this.renderFormControl("carb", carb)}
          {this.renderFormControl("protein", protein)}
          {this.renderFormControl("fat", fat)}
          <button>Submit</button>
        </form>
        <div className="img-preview">
          <img src={imgUrl} alt="preview" />
        </div>
      </div>
    );
  };
}

FoodForm.propTypes = {
  actionCreate: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapS2P:", state);
  return {
    food: {
      title: "",
      kcals: 0,
      carb: 0,
      protein: 0,
      fat: 0,
      imgUrl: "",
      ...state.foodList.find((food) => food.id === ownProps.id),
    },
  };
};

export default connect(mapStateToProps)(FoodForm);
