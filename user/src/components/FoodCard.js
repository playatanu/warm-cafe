import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

// Icons
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

// React Redux
import { useDispatch } from "react-redux";
import { useState } from "react";

// Action
import cartAction from "../store/actions/cartAction";

var localcart = [];

const revoveItem = (item) => {
  let newArray = [...localcart];
  const index = newArray.findIndex((element) => element.id === item);
  if (index !== -1) {
    newArray.splice(index, 1);
    return newArray;
  }
};

const FoodCard = (props) => {
  var food = props.foods;
  const dis = useDispatch();
  const [cartcounter, SetCartcounter] = useState(0);

  const addToCart = (f) => {
    SetCartcounter(1);
    // localcart.push({
    //   id: f.id,
    //   name: f.name,
    //   image: f.image,
    //   price: f.price,
    //   count: 0,
    // });
    // cartIncrement(f.id);
  };

  const cartIncrement = (id) => {
    SetCartcounter(cartcounter + 1);

    // localcart.filter((val) => {
    //   if (val.id == id) {
    //     val.count++;
    //     dis(cartAction(localcart));
    //   }
    // });
  };

  const cartDecrement = (id) => {
    SetCartcounter(cartcounter - 1);

    // if (cartcounter != 1) {
    //   localcart.filter((val) => {
    //     if (val.id == id) {
    //       val.count--;
    //       dis(cartAction(localcart));
    //     }
    //   });
    // } else {
    //   dis(cartAction(revoveItem(id)));
    // }
  };

  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: food.image,
        }}
      />
      <View style={styles.namebar}>
        <MaterialCommunity
          name="radiobox-marked"
          color={food.veg == "true" ? "#0E9C0B" : "#FF000F"}
        />

        <Text style={styles.foodname}>{food.name}</Text>
      </View>

      <View style={styles.butom}>
        <Text style={styles.foodprice}>₹ {food.price}</Text>

        {cartcounter != 0 ? (
          <View style={styles.cart}>
            <TouchableOpacity
              onPressIn={() => {
                cartDecrement(food.id);
              }}
            >
              <Feather color={"#FFF"} name="minus" size={18} />
            </TouchableOpacity>
            <Text style={{ color: "#FFF", fontWeight: "bold" }}>
              {cartcounter}
            </Text>
            <TouchableOpacity onPressIn={() => cartIncrement(food.id)}>
              <Feather color={"#FFF"} name="plus" size={18} />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPressIn={() => addToCart(food)}>
            <View style={styles.cart}>
              <Feather name="shopping-cart" color={"#FFF"} />

              <Text style={{ color: "#fff", fontWeight: "bold" }}>ADD</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 170,
    height: 170,
    backgroundColor: "#fff",
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
    flexDirection: "row",
    paddingLeft: 8,
    alignItems: "center",
  },
  butom: {
    flex: 1,
    flexDirection: "row",
  },
  cart: {
    flex: 1,
    width: 90,
    flexDirection: "row",
    backgroundColor: "#FF971D",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  counter: {
    color: "#fff",
  },
  foodname: {
    marginLeft: 3,
    textAlign: "center",
    fontSize: 15,
  },
  foodprice: {
    width: 80,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default FoodCard;
