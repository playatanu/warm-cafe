//store redux
import store from "./src/store/store";
import { Provider } from "react-redux";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//pages
import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import OrderScreen from "./src/screens/OrderScreen";

//icons
import Icon from "react-native-vector-icons/AntDesign";

import HeaderHome from "./src/custom/HaderHome";

import React from "react";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: () => <HeaderHome /> }}
      />
    </Stack.Navigator>
  );
};

const SearchNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

const CartNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
};

const ProfileNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "Search") {
                iconName = focused ? "search1" : "search1";
              } else if (route.name === "Cart") {
                iconName = focused ? "shoppingcart" : "shoppingcart";
              } else if (route.name === "Profile") {
                iconName = focused ? "user" : "user";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF971D",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeNav} />
          <Tab.Screen name="Search" component={SearchNav} />
          <Tab.Screen
            name="Cart"
            component={CartNav}
            options={{
              tabBarBadge: true ? 3 : false,
              tabBarBadgeStyle: { backgroundColor: "#FF971D", color: "#FFF" },
            }}
          />
          <Tab.Screen name="Profile" component={ProfileNav} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
