import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const PaymentScreen = ({ navigation }) => {
  return (
    <>
      <View style={{ padding: 8 }}>
        <Text
          style={{
            margin: 8,
          }}
        >
          Select a payment method
        </Text>

        <View style={{ margin: 6 }}>
          <View style={styles.li}>
            <Text>Other UPI IDs/Net Banking</Text>
          </View>

          <View style={styles.li}>
            <Text>Debit/Credit/ATM Card</Text>
          </View>

          <View style={styles.li}>
            <Text>Cash on Delivery</Text>
          </View>
        </View>

        <Text
          style={{
            margin: 8,
          }}
        >
          Deliver to
        </Text>
        <View style={styles.address}>
          <Text>Atanu Debnath</Text>
          <Text>Malanchapara Ambagan</Text>
          <Text>6296843271</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
          <View style={styles.proceedBtn}>
            <Text style={styles.btnText}>Proceed to Buy (3 items)</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  address: {
    padding: 18,
    margin: 8,
    backgroundColor: "#FFF",
  },

  li: {
    padding: 18,
    backgroundColor: "#FFF",
    marginTop: 2,
  },

  proceedBtn: {
    backgroundColor: "#FF971D",
    padding: 8,
    margin: 8,
    alignItems: "center",
    borderRadius: 5,
  },

  btnText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default PaymentScreen;
