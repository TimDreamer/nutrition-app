import { v4 as uuid } from "uuid";

export const addFood = ({ title, kcals, carb, protein, fat, imgUrl } = {}) => ({
  type: "ADD_FOOD",
  payload: {
    _id: uuid(),
    title,
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

export const removeFood = ({ _id } = {}) => ({
  type: "REMOVE_FOOD",
  _id,
});

export const editFood = ({ _id, updates } = {}) => ({
  type: "EDIT_FOOD",
  _id,
  payload: updates,
});
