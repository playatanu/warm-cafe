import { View, FlatList, SafeAreaView } from "react-native";
import FoodCard from "../components/FoodCard";

const fooods = [
  {
    id: 1,
    name: "Momo",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "25",
    veg: "false",
  },
  {
    id: 2,
    name: "Phucha",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "15",
    veg: "false",
  },
  {
    id: 3,
    name: "Niramis Phu",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "20",
    veg: "true",
  },
  {
    id: 1,
    name: "Momo",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "25",
    veg: "false",
  },
  {
    id: 2,
    name: "Phucha",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "15",
    veg: "false",
  },
  {
    id: 3,
    name: "Niramis Phu",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "20",
    veg: "true",
  },
];

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ margin: 40 }}></View>
      <FlatList
        numColumns={2}
        data={fooods}
        renderItem={({ item }) => <FoodCard foods={item} />}
      ></FlatList>
    </View>
  );
};

export default HomePage;
