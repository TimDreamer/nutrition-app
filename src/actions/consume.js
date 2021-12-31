export const addConsume = (data = {}) => ({
  type: "ADD_CONSUME",
  payload: data,
});

export const substractConsume = (data = {}) => ({
  type: "SUBSTRACT_CONSUME",
  payload: data,
});

export const clearConsume = () => ({
  type: "CLEAR_CONSUME",
});
