const addFoodItems = food => {
  return {
    type: 'addFoodItems',
    payload: food,
  };
};

const removeFoodItem = id => {
  return {
    type: 'removeFoodItem',
    payload: id,
  };
};

const incrementCount = id => {
  console.log('inc' + id);
  return {
    type: 'incrementCount',
    payload: id,
  };
};

const decrementCount = id => {
  console.log('dec' + id);
  return {
    type: 'decrementCount',
    payload: id,
  };
};

export {removeFoodItem, addFoodItems, incrementCount, decrementCount};
