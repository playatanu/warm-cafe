import { Provider } from "react-redux";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "./src/views/HomePage";
import CartPage from "./src/views/CartPage";

import store from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Cart" component={CartPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
