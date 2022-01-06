import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";

import MiniFoodCard from "../components/MiniFoodCard";

import foodData from "../db/foodData";

const CartScreen = ({ navigation }) => {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <View style={{ padding: 8 }}>
      <Text style={styles.totalText}>Subtotal 421</Text>
      <TouchableOpacity>
        <View style={styles.proceedBtn}>
          <Text style={styles.btnText}>Proceed to Buy (3 items)</Text>
        </View>
      </TouchableOpacity>

      <MiniFoodCard foods={foodData[1]} />
      {/* <FlatList
      {/* <FlatList
        numColumns={2}
        data={cart}
        extraData={cart}
        keyExtractor={cart.id}
        progressViewOffset={100}
        ListEmptyComponent={<Text>"No data found." </Text>}
        renderItem={({ item }) => (
          <Text>
            {item.name} {item.count}
          </Text>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  totalText: {
    margin: 8,
  },
  proceedBtn: {
    margin: 8,
    backgroundColor: "#FF971D",
    padding: 8,
    alignItems: "center",
    borderRadius: 5,
  },

  btnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default CartScreen;
