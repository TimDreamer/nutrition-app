import FoodForm from "./FoodForm";
import { editFood } from "../actions/foods";

const EditFood = ({ location: { search }, history }) => (
  <FoodForm
    actionCreate={editFood}
    fetchMethodType="put"
    _id={search.match(/\w+/)[0]}
    history={history}
  />
);

export default EditFood;
