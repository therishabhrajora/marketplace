import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Detail" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
