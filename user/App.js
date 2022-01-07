//store redux
import store from "./src/store/store";
import { Provider } from "react-redux";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import HomeScreen from "./src/screens/HomeScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SearchScreen from "./src/screens/SearchScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import OrderScreen from "./src/screens/OrderScreen";
import LoginScreen from "./src/screens/LoginScreen";

//custom screen
import HeaderHome from "./src/custom/HaderHome";

//icons
import Icon from "react-native-vector-icons/AntDesign";

//Navigator
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
      <Stack.Screen
        name="Profile"
        component={true ? ProfileScreen : LoginScreen}
      />
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

              if (route.name === "HomeNav") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "SearchNav") {
                iconName = focused ? "search1" : "search1";
              } else if (route.name === "CartNav") {
                iconName = focused ? "shoppingcart" : "shoppingcart";
              } else if (route.name === "ProfileNav") {
                iconName = focused ? "user" : "user";
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#FF971D",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="HomeNav" component={HomeNav} />
          <Tab.Screen name="SearchNav" component={SearchNav} />
          <Tab.Screen
            name="CartNav"
            component={CartNav}
            options={{
              tabBarBadge: true ? 3 : false,
              tabBarBadgeStyle: { backgroundColor: "#FF971D", color: "#FFF" },
            }}
          />
          <Tab.Screen name="ProfileNav" component={ProfileNav} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
