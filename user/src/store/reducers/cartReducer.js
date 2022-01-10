var foodList = [];
var totalAmount = 0;

const cartReducer = (
  state = {items: foodList, cartCounter: 0, totalAmount: totalAmount},
  action,
) => {
  switch (action.type) {
    case 'addFoodItems':
      addFood(action.payload);

      return {
        items: foodList,
        cartCounter: foodList.length,
        totalAmount: totalAmount,
      };

    case 'removeFoodItem':
      removeFood(action.payload);
      return {
        items: foodList,
        cartCounter: foodList.length,
        totalAmount: totalAmount,
      };

    case 'incrementCount':
      incrementCount(action.payload);
      return {
        items: foodList,
        cartCounter: foodList.length,
        totalAmount: totalAmount,
      };

    case 'decrementCount':
      decrementCount(action.payload);
      return {
        items: foodList,
        cartCounter: foodList.length,
        totalAmount: totalAmount,
      };

    default:
      return state;
  }
};

export default cartReducer;

const addFood = food => {
  foodList.push(food);
  handelTotalAmount();
};

const removeFood = id => {
  foodList = foodList.filter(food => food.id != id);
  handelTotalAmount();
  console.log(foodList);
};

const incrementCount = id => {
  foodList.forEach(element => {
    if (element.id == id) {
      element.count = element.count + 1;
    }
  });
  handelTotalAmount();
  console.log(foodList);
};

const decrementCount = id => {
  foodList.forEach(element => {
    if (element.id == id) {
      element.count = element.count - 1;
    }
  });
  handelTotalAmount();
};

const handelTotalAmount = () => {
  var item = 0;

  if (foodList.length != 0) {
    foodList.forEach(element => {
      item = item + parseInt(element.price) * element.count;
      totalAmount = item;
    });
  } else {
    totalAmount = 0;
  }
};
