import nutritions from "../apis/nutritions";
import history from "../history";
import { v4 as uuid } from "uuid";
import {
  ADD_FOOD,
  LOAD_DB,
  REMOVE_FOOD,
  EDIT_FOOD,
  ADD_CONSUME,
  SUBSTRACT_CONSUME,
  CLEAR_CONSUME,
} from "./types";

const API = "/nutritions";

export const addFood = (food) => async (dispatch) => {
  console.log({ id: uuid(), ...food });
  const res = await nutritions.post(API, { id: uuid(), ...food });

  dispatch({
    type: ADD_FOOD,
    payload: res.data,
  });

  history.push("/");
};

// data : list of foods
export const loadDB = () => async (dispatch) => {
  const res = await nutritions.get(API);

  dispatch({
    type: LOAD_DB,
    payload: res.data,
  });
};

export const removeFood =
  ({ id }) =>
  async (dispatch) => {
    await nutritions.delete(`${API}/${id}`);

    dispatch({
      type: REMOVE_FOOD,
      id,
    });
    history.push("/");
  };

export const editFood = (updates) => async (dispatch) => {
  const res = await nutritions.patch(`${API}/${updates.id}`, updates);

  dispatch({
    type: EDIT_FOOD,
    id: updates.id,
    payload: res.data,
  });

  history.push("/");
};

export const addConsume = (data = {}) => ({
  type: ADD_CONSUME,
  payload: data,
});

export const substractConsume = (data = {}) => ({
  type: SUBSTRACT_CONSUME,
  payload: data,
});

export const clearConsume = () => ({
  type: CLEAR_CONSUME,
});
