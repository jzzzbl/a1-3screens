//import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Button, Alert } from "react-native";
  
import Explore from "./screens/Explore";
import Account from "./screens/Account"
import Details from "./screens/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{
            headerLeft: () => (
              <Button
                title="My Account"
                color="darkblue"
                onPress={() => Alert.alert("It works!")}
              />
            ),
          }}
        />
        <Stack.Screen
          name="My Account"
          component={Account}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
