import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import HomePage from "./src/views/HomePage";

export default App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomePage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
