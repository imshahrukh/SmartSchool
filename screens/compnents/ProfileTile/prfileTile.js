import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, icons } from "./../../../constants";

const ProfileTile = ({ message }) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.shadow,
          {
            height: 60,
            backgroundColor: COLORS.lightGray,
            marginBottom: 10,
            marginTop: 5,
            justifyContent: "space-between",
            alignItems: "center",
            // display: "flex",
            flexDirection: "row",
            padding: 10,

            // alignItems: "center",
          },
        ]}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.darkBlue,
            fontWeight: "700",
          }}
        >
          {message}
        </Text>
        <Image
          source={icons.right_arrow}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            tintColor: COLORS.darkBlue,
            //   marginRight: "5%",
          }}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
export default ProfileTile;
