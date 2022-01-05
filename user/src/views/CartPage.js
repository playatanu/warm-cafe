import { View, FlatList, Text, Button } from "react-native";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const CartPage = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer);

  const [state, setstate] = useState([]);

  useEffect(() => {
    navigation.addListener("tabPress", () => {
      setstate(cart);
    });
  }, [navigation, cart]);

  return (
    <View style={{ margin: 100 }}>
      {console.log("setstate 2")}
      <FlatList
        numColumns={2}
        data={cart}
        extraData={state}
        keyExtractor={state.id}
        renderItem={({ item }) => (
          <Text>
            {item.name} {item.count}
          </Text>
        )}
      />
    </View>
  );
};

export default CartPage;
