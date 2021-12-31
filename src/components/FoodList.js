import { connect } from "react-redux";
import Food from "./Food";

const FoodList = ({ foodList }) => (
  <div>
    {foodList.map((food) => (
      <Food key={food._id} {...food} />
    ))}
  </div>
);

const mapStateToProps = (state) => {
  return {
    foodList: state.foodList,
  };
};

export default connect(mapStateToProps)(FoodList);
