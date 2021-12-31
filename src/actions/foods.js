import { v4 as uuid } from "uuid";

export const addFood = ({ kcals, carb, protein, fat, imgUrl } = {}) => ({
  type: "ADD_FOOD",
  payload: {
    _id: uuid(),
    kcals,
    carb,
    protein,
    fat,
    imgUrl,
  },
});

// data : list of foods
export const loadDB = (data = []) => ({
  type: "LOAD_DB",
  payload: data,
});

export const removeFood = ({ id } = {}) => ({
  type: "REMOVE_FOOD",
  id,
});

export const editFood = ({ id, updates } = {}) => ({
  type: "EDIT_FOOD",
  id,
  payload: updates,
});
