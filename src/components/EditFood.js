import FoodForm from "./FoodForm";
import { editFood } from "../actions";

const EditFood = (props) => (
  <FoodForm actionCreate={editFood} id={props.match.params.id} />
);

export default EditFood;
