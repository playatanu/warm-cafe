import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import ActionSheet from "react-native-actionsheet";
import { useRef, useState } from "react";
import { userActionNAP } from "../store/actions/userAction";

const ProfileScreen = ({ navigation }) => {
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
    <View style={{ flex: 1, width: "90%" }}>
      <TextInput
        style={{ padding: 10 }}
        defaultValue={userState.name}
        placeholder="Your Name"
        onChangeText={(e) => SetUser({ ...user, name: e })}
      />
    </View>,

    <View style={{ flex: 1, width: "90%" }}>
      <TextInput
        style={{ padding: 10 }}
        defaultValue={userState.address}
        placeholder="Your Address"
        onChangeText={(e) => SetUser({ ...user, address: e })}
      />
    </View>,

    <View style={{ flex: 1, width: "90%" }}>
      <TextInput
        style={{ padding: 10 }}
        defaultValue={userState.phone}
        placeholder="Your Phone Number"
        onChangeText={(e) => SetUser({ ...user, phone: e })}
      />
    </View>,

    "SAVE",
    "cencel",
  ];

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={showActionSheet}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={{
              uri: userState.image,
            }}
          />

          <View>
            <Text>{userState.name}</Text>
            <Text>{userState.email}</Text>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ backgroundColor: "#FFF", padding: 18, marginTop: 15 }}>
        <Text>Phone</Text>
        <Text>{userState.phone}</Text>
      </View>

      <View style={{ backgroundColor: "#FFF", padding: 18, marginTop: 3 }}>
        <Text>Address</Text>
        <Text>{userState.address}</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Order")}>
        <View style={{ backgroundColor: "#FFF", padding: 18, marginTop: 15 }}>
          <Text>Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.warn("logout")}>
        <View style={{ backgroundColor: "#FFF", padding: 18, marginTop: 3 }}>
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>

      <ActionSheet
        ref={actionSheet}
        //title={"Which one do you like?"}
        options={sheetOption}
        cancelButtonIndex={4}
        destructiveButtonIndex={0}
        onPress={(index) => {
          if (index == 3) {
            dis(userActionNAP(user));
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 10,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "space-around",
  },

  image: {
    height: 100,
    width: 100,
    backgroundColor: "#E3E3E3",
    borderRadius: 100,
  },
});
export default ProfileScreen;
