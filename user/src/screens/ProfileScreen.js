import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FFF",
          padding: 10,
          marginTop: 5,
        }}
      >
        <Text style={{ fontSize: 15 }}>Atanu</Text>
        <Text style={{ fontSize: 15 }}>playatanu@gmail.com</Text>
      </View>

      <View style={{ backgroundColor: "#FFF", padding: 10, marginTop: 5 }}>
        <Text style={{ fontSize: 13 }}>Phone</Text>
        <Text style={{ fontSize: 15 }}>6296843271</Text>
      </View>

      <View style={{ backgroundColor: "#FFF", padding: 10, marginTop: 5 }}>
        <Text style={{ fontSize: 13 }}>Address</Text>
        <Text style={{ fontSize: 15 }}>Malanchapara Ambagan</Text>
      </View>

      <TouchableOpacity>
        <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 15 }}>
          <Text style={{ fontSize: 18 }}>Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 5 }}>
          <Text style={{ fontSize: 18 }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBar: {
    margin: 20,
    height: 100,
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#FFF",
  },

  profileBarRight: { textAlign: "center" },
});
export default ProfileScreen;
