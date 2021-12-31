const foodReducder = (foodList = [], action) => {
  switch (action.type) {
    case "ADD_FOOD":
      return [...foodList, action.payload];
    case "LOAD_DB":
      return foodList.concat(action.payload);
    case "REMOVE_FOOD":
      return foodList.filter((food) => food._id !== action._id);
    case "EDIT_FOOD":
      return foodList.map((food) =>
        food.id === action.id ? { ...food, ...action.updates } : food
      );
    default:
      return foodList;
  }
};

export default foodReducder;
