import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

// Icons
import Icon from 'react-native-vector-icons/Feather';
import IconME from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  removeFoodItem,
  addFoodItems,
  incrementCount,
  decrementCount,
} from '../store/actions/cartAction';

const FoodCard = props => {
  const dis = useDispatch();
  const addToCart = food => {
    dis(
      addFoodItems({
        id: food.id,
        name: food.name,
        price: food.price,
        image: food.image,
        veg: food.veg,
        count: 1,
      }),
    );

    const message = food.name + ' Added to your Cart';

    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      200,
    );
  };

  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: props.foods.image,
        }}
      />
      <View style={styles.namebar}>
        <IconME
          name="radiobox-marked"
          color={props.foods.veg === 'true' ? '#0E9C0B' : '#FF000F'}
        />

        <Text style={styles.foodname}>{props.foods.name}</Text>
      </View>

      <View style={styles.butom}>
        <Text style={styles.foodprice}>₹ {props.foods.price}</Text>
        <TouchableOpacity
          onPressIn={() => {
            addToCart(props.foods);
          }}>
          <View style={styles.cart}>
            <Icon name="shopping-cart" color={'#FFF'} />

            <Text style={{color: '#fff', fontWeight: 'bold'}}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 170,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 8,
    margin: 8,
  },
  image: {
    width: 170,
    height: 100,
    borderRadius: 10,
  },
  namebar: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 8,
    alignItems: 'center',
  },
  butom: {
    flex: 1,
    flexDirection: 'row',
  },
  cart: {
    flex: 1,
    width: 90,
    flexDirection: 'row',
    backgroundColor: '#FF971D',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  counter: {
    color: '#fff',
  },
  foodname: {
    marginLeft: 3,
    textAlign: 'center',
    fontSize: 15,
  },
  foodprice: {
    width: 80,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default FoodCard;
