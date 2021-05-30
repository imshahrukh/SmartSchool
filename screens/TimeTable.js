import React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS, icons } from "../constants";
import TopInformationBar from "./compnents/TopInformationBar/_topInformationBar";
import SchedualScreen from "./compnents/schedual/screens";

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const TimeTable = () => {
  let [select, setSelect] = useState(1);
  // top message
  const screen = (message) => {
    return <Text>{message}</Text>;
  };

  // render date
  const renderItem = ({ item }) => <Item title={item.date.substring(8, 10)} />;
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* top heading and notfcation button */}
        <TopInformationBar menu={"Schedual"} />
        {/* Schedual InPage Navigation */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            height: "8%",
            alignItems: "center",
          }}
        >
          {/* btn - 1 */}
          <TouchableOpacity
            onPress={() => {
              setSelect(1);
            }}
            style={{
              padding: "1%",
              borderBottomColor: select == 1 ? COLORS.darkBlue : COLORS.gray,
              borderBottomWidth: select == 1 ? 2 : 0,
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: select == 1 ? COLORS.darkBlue : COLORS.gray,
              }}
            >
              Timetable
            </Text>
          </TouchableOpacity>
          {/* btn - 2 */}

          <TouchableOpacity
            onPress={() => {
              setSelect(2);
            }}
            style={{
              padding: "1%",
              borderBottomColor: select == 2 ? COLORS.darkBlue : COLORS.gray,
              borderBottomWidth: select == 2 ? 2 : 0,
            }}
          >
            <Text
              style={{
                ...FONTS.body2,
                color: select == 2 ? COLORS.darkBlue : COLORS.gray,
              }}
            >
              Homework
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
                color: select == 3 ? COLORS.darkBlue : COLORS.gray,
              }}
            >
              ExtraCri
            </Text>
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={{ flex: 1 }}>
          {/* Time Table */}
          {select == 1 ? <SchedualScreen menu={"Screen1"} /> : null}
          {/* Homw Work */}
          {select == 2 ? <SchedualScreen menu={"Screen2"} /> : null}
          {/* Extra Cariculam */}
          {select == 3 ? <SchedualScreen menu={"Screen3"} /> : null}

          {/* create a sepeate componetns for these there and load a data */}
        </View>
      </View>
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

export default TimeTable;
