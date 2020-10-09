//import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { Button, Alert } from "react-native";
  
import Explore from "./screens/Explore";
import Account from "./screens/Account"
import Home from "./screens/Home";

const Stack = createStackNavigator();
const RootTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootTab.Navigator
        tabBarOptions={{
          activeTintColor: "coral",
          inactiveTintColor: "gray",
        }}
      >
        <RootTab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <Entypo name="home" size={24} color={focused ? "coral" : "#A7AFB2"} />
            ),
          }}
        />
        <RootTab.Screen
          name="Explore"
          component={Explore}
          options={{
            title: "Explore",
            tabBarIcon: ({ focused }) => (
              <Entypo name="compass" size={24} color={focused ? "coral" : "#A7AFB2"} />
            ),
          }}
        />
        <RootTab.Screen
          name="Account"
          component={Account}
          options={{
            title: "Account",
            tabBarIcon: ({ focused }) => (
              <AntDesign name="user" size={24} color={focused ? "coral" : "#A7AFB2"} />
            ),
          }}
        />
      </RootTab.Navigator>
    </NavigationContainer>
    /*
    <NavigationContainer>
      
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

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
      </Stack.Navigator>
    </NavigationContainer>
    */
  );
}
