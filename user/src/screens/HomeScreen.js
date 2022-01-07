import { View, Text, FlatList, SafeAreaView, Switch } from "react-native";
//import SwitchToggle from "react-native-switch-toggle";
import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import foodData from "../db/foodData";

import { useSelector } from "react-redux";
const HomeScreen = ({ navigation }) => {
  const [vegFilter, setVegFilter] = useState(false);
  const toggleFunc = (e) => {
    setVegFilter(e);
  };
  return (
    <View style={{ alignItems: "center" }}>
      {/* Veg Only Switch */}

      <View
        style={{
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Text>Veg Only</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={vegFilter ? "#FF971D" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          value={vegFilter}
          onValueChange={toggleFunc}
        />
      </View>

      {/* Flatlist Food Item */}

      <FlatList
        numColumns={2}
        data={foodData.filter((val) => {
          if (vegFilter) {
            if (val.veg == vegFilter.toString()) {
              return val;
            }
          } else {
            return val;
          }
        })}
        renderItem={({ item }) => <FoodCard foods={item} />}
      />
    </View>
  );
};

export default HomeScreen;
