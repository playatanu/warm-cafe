import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ActionSheet from "react-native-actionsheet";
import { useRef, useState } from "react";
import { userActionNAP } from "../store/actions/userAction";

const PaymentScreen = ({ navigation }) => {
  // user State
  const dis = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const [user, SetUser] = useState({
    name: userState.name,
    address: userState.address,
    phone: userState.phone,
  });

  //buttom sheets function
  const actionSheet = useRef();
  showActionSheet = () => {
    actionSheet.current.show();
  };

  //buttom sheet UI
  const sheetOption = [
    <View style={{ width: "90%" }}>
      <TextInput
        style={{}}
        defaultValue={userState.name}
        placeholder="Your Name"
        onChangeText={(e) => SetUser({ ...user, name: e })}
      />
    </View>,

    <View style={{ width: "90%" }}>
      <TextInput
        style={{}}
        defaultValue={userState.address}
        placeholder="Your Address"
        onChangeText={(e) => SetUser({ ...user, address: e })}
      />
    </View>,

    <View style={{ width: "90%" }}>
      <TextInput
        style={{}}
        defaultValue={userState.phone}
        placeholder="Your Phone Number"
        onChangeText={(e) => SetUser({ ...user, phone: e })}
      />
    </View>,

    "Save",
  ];

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

        <TouchableOpacity onPress={showActionSheet}>
          <View style={styles.address}>
            <Text>{userState.name}</Text>
            <Text>{userState.address}</Text>
            <Text>{userState.phone}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Order")}>
          <View style={styles.proceedBtn}>
            <Text style={styles.btnText}>Proceed to Buy (3 items)</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ActionSheet
        ref={actionSheet}
        tintColor={"#FF971D"}
        // title={"Which one do you like?"}
        options={sheetOption}
        //cancelButtonIndex={4}
        //destructiveButtonIndex={0}
        onPress={(index) => {
          if (index == 3) {
            dis(userActionNAP(user));
          }
        }}
      />
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
