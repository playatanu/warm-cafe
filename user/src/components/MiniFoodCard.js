import {View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  removeFoodItem,
  addFoodItems,
  incrementCount,
  decrementCount,
} from '../store/actions/cartAction';

export default Ui = props => {
  const [cartcounter, SetCartcounter] = useState({
    count: props.foods.count,
    status: true,
  });
  const dis = useDispatch();
  //counter system
  const cartIncrementBtn = food => {
    SetCartcounter({count: cartcounter.count + 1, status: true});
    dis(incrementCount(food.id));
  };

  const cartDecrementBtn = food => {
    // counter system
    if (cartcounter.count != 1) {
      SetCartcounter({count: cartcounter.count - 1, status: true});
      dis(decrementCount(food.id));
    } else {
      SetCartcounter({count: 0, status: false});
      dis(removeFoodItem(food.id));
      dis(decrementCount(food.id));
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* //image && name */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 50, height: 50, margin: 5}}
            source={{
              uri: props.foods.image,
            }}
          />
          <Text>{props.foods.name} </Text>
        </View>

        {/* //counter && price */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginHorizontal: 10}}>
            ₹{props.foods.price * props.foods.count}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 10,
              alignItems: 'center',
              borderColor: '#C4C4C4',
              borderWidth: 0.5,
            }}>
            <TouchableOpacity
              style={{backgroundColor: '#C4C4C4', padding: 8}}
              onPressIn={() => {
                cartDecrementBtn(props.foods);
              }}>
              <Icon color={'#FFF'} name="minus" size={18} />
            </TouchableOpacity>
            <Text
              style={{
                //color: '#C4C4C4',
                fontWeight: 'bold',
                marginHorizontal: 10,
              }}>
              {cartcounter.count}
            </Text>
            <TouchableOpacity
              style={{backgroundColor: '#C4C4C4', padding: 8}}
              onPressIn={() => {
                cartIncrementBtn(props.foods);
              }}>
              <Icon color={'#FFF'} name="plus" size={18} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
