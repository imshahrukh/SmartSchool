import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs";

import { Home, TimeTable, Marks } from "../screens";
import { COLORS, FONTS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tapNav,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.home}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedual"
        component={TimeTable}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.calendar}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Time Table
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.profile}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Marks"
        component={Marks}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.trophy}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Marks
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tapScreenView}>
              <Image
                source={icons.settings}
                resizeMode="contain"
                style={[
                  styles.tapScreenImg,
                  { tintColor: focused ? COLORS.primary : COLORS.black },
                ]}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}
              >
                Setting
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tapNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: COLORS.white,
    borderTopColor: "transparent",
    height: 100,
  },
  tapScreenView: {
    alignItems: "center",
    justifyContent: "center",
  },
  tapScreenImg: {
    width: 30,
    height: 30,
  },
});

export default Tabs;
