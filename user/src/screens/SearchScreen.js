import { View, TextInput, Text, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import { useState } from "react";

import foodData from "../db/foodData";

import FoodCard from "../components/FoodCard";

const SearchScreen = ({ navigation }) => {
  const [searchResult, setSearchResult] = useState([]);

  const updateFood = (e) => {
    console.log(e);
    setSearchResult([
      {
        id: 7,
        name: "Special Cha",
        image:
          "https://images.unsplash.com/photo-1608651057580-4a50b2fc2281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1pbGslMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "10",
        veg: "true",
      },
      {
        id: 7,
        name: "Special Cha",
        image:
          "https://images.unsplash.com/photo-1608651057580-4a50b2fc2281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1pbGslMjB0ZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        price: "10",
        veg: "true",
      },
    ]);
  };
  return (
    <>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.searchbox}>
          <TextInput
            placeholder="Find your fab Foods.."
            style={{
              flex: 0,
              flexDirection: "row",
              width: "85%",
            }}
            onChangeText={(e) => updateFood(e)}
          />
          <Icon name="search1" size={25} />
        </View>

        <View>
          <FlatList
            numColumns={2}
            data={searchResult}
            renderItem={({ item }) => <FoodCard foods={item} />}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchbox: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFF",
    borderRadius: 100,
    justifyContent: "space-between",
  },
});
export default SearchScreen;
