import FoodForm from "./FoodForm";
import { addFood } from "../actions/foods";

const AddFood = (props) => (
  <FoodForm {...props} actionCreate={addFood} fetchMethodType={"post"} />
);

export default AddFood;
