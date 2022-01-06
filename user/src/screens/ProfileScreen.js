import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={{
            uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          }}
        />

        <View>
          <Text style={{ fontSize: 15 }}>Atanu Debnath</Text>
          <Text style={{ fontSize: 15 }}>playatanu@gmail.com</Text>
        </View>
      </View>

      <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 15 }}>
        <Text style={{ fontSize: 13 }}>Phone</Text>
        <Text style={{ fontSize: 15 }}>6296843271</Text>
      </View>

      <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 3 }}>
        <Text style={{ fontSize: 13 }}>Address</Text>
        <Text style={{ fontSize: 15 }}>Malanchapara Ambagan</Text>
      </View>

      <TouchableOpacity>
        <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 15 }}>
          <Text style={{ fontSize: 18 }}>Orders</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ backgroundColor: "#FFF", padding: 15, marginTop: 3 }}>
          <Text style={{ fontSize: 18 }}>Logout</Text>
        </View>
      </TouchableOpacity>
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
