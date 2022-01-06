import { Text, View, TouchableOpacity } from "react-native";
import * as React from "react";

const HeaderHome = () => {
  return (
    <>
      <View style={{ width: "100%", height: "100%" }}>
        <TouchableOpacity onPress={() => sheetRef.current.snapTo(0)}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            Malancha Para Ambagean
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HeaderHome;
