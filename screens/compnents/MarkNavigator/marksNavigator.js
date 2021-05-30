import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "./../../../constants";
import ShowMarks from "./../showMarks/showMarks";

const MraksNavigator = () => {
  let [select, setSelect] = useState(2);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        alignItems: "center",
        // backgroundColor: COLORS.blue,
      }}
    >
      {/* btn - 1 */}
      <TouchableOpacity
        onPress={() => {
          setSelect(1);
        }}
        style={{
          padding: "1%",
          borderBottomColor: COLORS.darkBlue,
          borderBottomWidth: select == 1 ? 2 : 0,
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.darkBlue,
          }}
        >
          Weekly
        </Text>
      </TouchableOpacity>
      {/* btn - 2 */}

      <TouchableOpacity
        onPress={() => {
          setSelect(2);
        }}
        style={{
          padding: "1%",
          borderBottomColor: COLORS.darkBlue,
          borderBottomWidth: select == 2 ? 2 : 0,
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.darkBlue,
          }}
        >
          Monthy
        </Text>
      </TouchableOpacity>

      {/* btn - 3 */}

      <TouchableOpacity
        onPress={() => {
          setSelect(3);
        }}
        style={{
          padding: "1%",
          borderBottomColor: select == 3 ? COLORS.darkBlue : COLORS.gray,
          borderBottomWidth: select == 3 ? 2 : 0,
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: COLORS.darkBlue,
          }}
        >
          Semeter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  schedual_btn__containor: {},
  schedual_inpage__btn: {},
});
export default MraksNavigator;
