import FoodForm from "./FoodForm";
import { addFood } from "../actions";

const AddFood = (props) => <FoodForm {...props} actionCreate={addFood} />;

export default AddFood;
