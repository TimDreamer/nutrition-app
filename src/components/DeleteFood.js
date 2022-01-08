import React, { Component } from "react";
import Modal from "./modal";
import { removeFood } from "../actions";
import { connect } from "react-redux";
import { loadDB } from "../actions";
import history from "../history";

class DeleteFood extends Component {
  componentDidMount() {
    if (this.props.food) return;
    this.props.loadDB();
  }

  onModalConfirm = () => {
    this.props.removeFood({ id: this.props.match.params.id });
  };

  renderContent = () => (
    <React.Fragment>
      <h1>Are you sure to delete?</h1>
      <hr />
      {Object.keys(this.props.food).map((key, idx) => {
        switch (key) {
          case "title":
            return <h2 key={idx}>{this.props.food[key]}</h2>;
          case "kcals":
          case "carb":
          case "protein":
          case "fat":
            return (
              <p key={idx}>
                {key} : {this.props.food[key]}
              </p>
            );
          case "imgUrl":
            return (
              <figure className="modal__img-box">
                <img key={idx} src={this.props.food[key]} alt="img of food" />
              </figure>
            );
          default:
            return null;
        }
      })}
      <hr />
    </React.Fragment>
  );

  renderButtonGroup = () => (
    <React.Fragment>
      <button className="modal-confirm" onClick={this.onModalConfirm}>
        Confirm
      </button>
      <button className="modal-cancel" onClick={() => history.push("/")}>
        Cancel
      </button>
    </React.Fragment>
  );

  render() {
    if (!this.props.food) return <div>Loading...</div>;
    else
      return (
        <Modal
          onConfirm={this.onModalConfirm}
          content={this.renderContent()}
          btnGroup={this.renderButtonGroup()}
        />
      );
  }
}

const mapStateToProps = (state, ownProps) => ({
  food: state.foodList.find((food) => food.id === ownProps.match.params.id),
});

export default connect(mapStateToProps, { removeFood, loadDB })(DeleteFood);
