const consumeDefault = {
  carb: 0,
  protein: 0,
  fat: 0,
};

const consumeReducer = (consume = consumeDefault, action) => {
  let copy;
  switch (action.type) {
    case "ADD_CONSUME":
      copy = Object.assign({}, consume);
      for (let key in copy) {
        if (copy.hasOwnProperty(key))
          copy[key] = +(copy[key] + action.payload[key]).toFixed(2);
      }
      return copy;
    case "SUBSTRACT_CONSUME":
      copy = Object.assign({}, consume);
      for (let key in copy) {
        if (copy.hasOwnProperty(key))
          copy[key] = +(copy[key] - action.payload[key]).toFixed(2);
      }
      console.log(copy);
      return copy;
    case "CLEAR_CONSUME":
      return consumeDefault;
    default:
      return consume;
  }
};

export default consumeReducer;
