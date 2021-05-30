import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { COLORS, FONTS, icons } from "./../../../constants";
const TopInformationBar = ({ menu }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        // backgroundColor:COLORS.primary
      }}
    >
      {/* top heading and notfcation button */}
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.darkBlue,
          }}
        >
          {menu}
        </Text>
        <Image
          source={icons.active}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            position: "absolute",
            top: "30%",
            right: "5%",
          }}
        ></Image>
      </View>
    </View>
  );
};
export default TopInformationBar;
