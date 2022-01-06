import {
  ADD_FOOD,
  LOAD_DB,
  REMOVE_FOOD,
  EDIT_FOOD,
  ADD_CONSUME,
  SUBSTRACT_CONSUME,
  CLEAR_CONSUME,
} from "../actions/types";

const consumeDefault = {
  carb: 0,
  protein: 0,
  fat: 0,
};

export const consumeReducer = (consume = consumeDefault, action) => {
  let copy;
  switch (action.type) {
    case ADD_CONSUME:
      copy = Object.assign({}, consume);
      for (let key in copy) {
        if (copy.hasOwnProperty(key))
          copy[key] = +(copy[key] + action.payload[key]).toFixed(2);
      }
      return copy;
    case SUBSTRACT_CONSUME:
      copy = Object.assign({}, consume);
      for (let key in copy) {
        if (copy.hasOwnProperty(key))
          copy[key] = +(copy[key] - action.payload[key]).toFixed(2);
      }
      console.log(copy);
      return copy;
    case CLEAR_CONSUME:
      return consumeDefault;
    default:
      return consume;
  }
};

export const foodReducer = (foodList = [], action) => {
  switch (action.type) {
    case ADD_FOOD:
      return [...foodList, action.payload];
    case LOAD_DB:
      return action.payload;
    case REMOVE_FOOD:
      return foodList.filter((food) => food.id !== action.id);
    case EDIT_FOOD:
      return foodList.map((food) =>
        food.id === action.id ? { ...food, ...action.payload } : food
      );
    default:
      return foodList;
  }
};
