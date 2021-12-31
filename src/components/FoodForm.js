import PropTypes from "prop-types";
import { Component } from "react";
import { connect } from "react-redux";
import "./FoodForm.css";

class FoodForm extends Component {
  constructor(props) {
    super(props);
    // console.log(props._id);
    this.state = props._id
      ? this.props.foodList.find((food) => food._id === props._id)
      : {
          title: "",
          kcals: 0,
          carb: 0,
          protein: 0,
          fat: 0,
          imgUrl: "",
        };
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.dispatch(this.props.actionCreate(this.state));
    fetch("/api/nutritions", {
      method: this.props.fetchMethodType,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 200) this.props.history.push("/");
        else throw Error("Post data fail");
      })
      .catch((e) => console.error(e));
  };

  getOnChange = (name) => {
    return (e) => {
      const val = e.target.value;
      this.setState(() => ({ [name]: val }));
    };
  };

  render = () => {
    const { title, kcals, carb, protein, fat, imgUrl } = this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <div className="form-control">
            <label htmlFor="title">Title : </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={this.getOnChange("title")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="imgUrl">imgUrl : </label>
            <input
              type="text"
              id="imgUrl"
              value={imgUrl}
              onChange={this.getOnChange("imgUrl")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="kcals">kcals : </label>
            <input
              type="text"
              id="kcals"
              value={kcals}
              onChange={this.getOnChange("kcals")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="carb">carb : </label>
            <input
              type="text"
              id="carb"
              value={carb}
              onChange={this.getOnChange("carb")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="protein">protein : </label>
            <input
              type="text"
              id="protein"
              value={protein}
              onChange={this.getOnChange("protein")}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="fat">fat : </label>
            <input
              type="text"
              id="fat"
              value={fat}
              onChange={this.getOnChange("fat")}
              required
            />
          </div>
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
  fetchMethodType: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    foodList: state.foodList,
  };
};

export default connect(mapStateToProps)(FoodForm);
