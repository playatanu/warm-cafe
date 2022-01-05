import { View, Text, FlatList, SafeAreaView } from "react-native";
import { useEffect } from "react";
import FoodCard from "../components/FoodCard";
import foodData from "../db/foodData";
const HomePage = ({ navigation }) => {
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     console.log("Refreshed!");
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        numColumns={2}
        data={foodData}
        keyExtractor={foodData.id}
        renderItem={({ item }) => <FoodCard foods={item} />}
      />
    </View>
  );
};

export default HomePage;
