import { useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const LoginScreen = () => {
  return (
    <>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#4082d6",
            width: "70%",
            //justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
          }}
        >
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.dUAckhxnwPOwQ5nvO1RpKQHaHa?pid=ImgDet&rs=1",
            }}
            style={{ width: 40, height: 40, margin: 2, borderRadius: 2 }}
          />

          <View style={{ flex: 1, alignItems: "center" }}>
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
                // textAlign: "center",
              }}
            >
              Login With Google
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LoginScreen;
