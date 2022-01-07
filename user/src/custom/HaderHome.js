import { Text, View, TouchableOpacity, TextInput } from "react-native";
import * as React from "react";
import { useRef, useState } from "react";
import ActionSheet from "react-native-actionsheet";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const HeaderHome = () => {
  //buttom sheets function

  const actionSheet = useRef();
  const showActionSheet = () => {
    actionSheet.current.show();
  };

  //buttom sheet UI
  const sheetOption = [
    <TouchableOpacity
      style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Icon name="location-pin" size={15} color={"#FF971D"} />
      <Text style={{ color: "#FF971D", marginLeft: 5 }}>Current Location</Text>
    </TouchableOpacity>,

    <View style={{ width: "90%" }}>
      <TextInput
        style={{}}
        // defaultValue={userState.phone}
        placeholder="Your Location"
        //  onChangeText={(e) => SetUser({ ...user, phone: e })}
      />
    </View>,

    "Save",
  ];

  return (
    <>
      <View style={{ width: "100%", height: "100%" }}>
        <TouchableOpacity onPress={showActionSheet}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="location-pin" size={15} color={"#FF971D"} />
            <Text style={{ fontSize: 15, fontWeight: "400", paddingLeft: 10 }}>
              Malancha Para Ambagean
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ActionSheet
        ref={actionSheet}
        //title={"Which one do you like?"}
        options={sheetOption}
        // children={sheetOption}
        //cancelButtonIndex={4}
        tintColor={"#FF971D"}
        // destructiveButtonIndex={0}
        onPress={(index) => {
          if (index == 2) {
            // dis(userActionNAP(user));
            console.warn("styles");
          }
        }}
      />
    </>
  );
};

export default HeaderHome;
