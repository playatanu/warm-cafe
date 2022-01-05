import { StyleSheet, View, Text, Image } from "react-native";

const FoodCard = (props) => {
  var food = props.foods;
  return (
    <View style={styles.box}>
      <Image
        style={styles.image}
        source={{
          uri: food.image,
        }}
      />

      <View style={styles.namebar}>
        <Text style={styles.foodname}>{food.name}</Text>
      </View>

      <View style={styles.butom}>
        <Text style={styles.foodprice}>₹ {food.price}</Text>

        <View style={styles.cart}>
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            i
          </Text>
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            CART
          </Text>
        </View>
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
  },
  butom: {
    flex: 1,
    flexDirection: "row",
  },
  cart: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FF971D",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "space-around",
  },
  foodname: {
    textAlign: "center",
    fontSize: 15,
  },
  foodprice: {
    width: 75,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default FoodCard;
