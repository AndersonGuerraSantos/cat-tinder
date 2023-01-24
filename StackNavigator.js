import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { PRIMARY_COLOR, DARK_GRAY, BLACK, WHITE } from "./utils/Colors";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        options={{ headerShown: false, animationEnabled: false }}

      >
        {() => (
          <Tab.Navigator

            screenOptions={() => ({
              tabBarShowLabel: false,
              contentStyle: { backgroundColor: "#E5E5E5" },

              tabBarStyle: {
                marginBottom: 20,
                marginLeft: 15,
                marginRight: 15,
                borderRadius: 36,
                height: 60,
                width: 200,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                alignContent: "center",

              },
            })}

          >
            <Tab.Screen
              name="HomeScreen"
              component={HomeScreen}

              options={{

                tabBarIcon: ({ focused, color, size }) => (

                  <Ionicons name={focused ? "paw" : "paw-outline"} color={focused ? "#EC537E" : "#434141"} size={size}

                    style={{ transform: [{ rotate: '30deg' }] }}

                  />
                ),
                headerShown: false,
                tabBarActiveTintColor: "#EC537E",
              }}
            />

            <Tab.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{

                tabBarIcon: ({ focused, color, size }) => (
                  <Icon name="message-circle" color={focused ? "#EC537E" : "#434141"} size={size} />
                ),
                tabBarActiveTintColor: "#EC537E",
                headerShown: false,

              }}

            />

            <Tab.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{

                tabBarIcon: ({ focused, color, size }) => (

                  <Icon name="user" color={focused ? "#EC537E" : "#434141"} size={size} />
                ),
                headerShown: false,

                tabBarActiveTintColor: "#EC537E",

              }}

            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default StackNavigator;
