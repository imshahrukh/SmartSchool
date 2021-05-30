import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { COLORS, FONTS, icons } from "../../../constants";
const getIcons = (items) => {
  if (items.subject == "Science") return icons.chemistry;
  if (items.subject == "Maths") return icons.maths;
  if (items.subject == "English") return icons.english;
  if (items.subject == "Art") return icons.art;
  if (items.subject == "Urdu") return icons.english;
  if (items.subject == "Pakistan Study") return icons.chemistry;
};
const getColor = (items) => {
  if (items.subject == "Science") return COLORS.blue;
  if (items.subject == "Maths") return COLORS.darkBlue;
  if (items.subject == "English") return COLORS.tomato;
  if (items.subject == "Art") return COLORS.gray;
  if (items.subject == "Urdu") return COLORS.blue;
  if (items.subject == "Pakistan Study") return COLORS.tomato;
};
const ExtraCiriculamTile = ({ title, id, item }) => {
  let color = getColor(item);
  return (
    <View
      style={[
        styles.shadow,
        {
          height: 150,
          flexDirection: "row",
          margin: "5%",
          marginTop: id == 0 ? "5%" : 0,
          backgroundColor: COLORS.lightGray,
          // paddingTop: "5%",
        },
      ]}
    >
      <View
        style={{
          width: "4%",
          backgroundColor: getColor(item),
          height: "100%",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <ImageBackground
          source={icons.football}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            opacity: 0.7,
          }}
        >
          <Text>Inside</Text>
        </ImageBackground>
        {/* text */}
        {/* text */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: "1%",
    paddingLeft: 14,
    paddingRight: 14,
    marginHorizontal: 5,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // fontWeight:500
  },
  title: {
    fontSize: 24,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default ExtraCiriculamTile;
