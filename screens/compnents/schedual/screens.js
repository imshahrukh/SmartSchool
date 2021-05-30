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
} from "react-native";

const DATA = [
  {
    id: 0,
    subject: "Science",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-01T00:00:00.000Z",
    time: "10:00 am - 11:00 am",
  },
  {
    id: 1,
    subject: "English",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-02T00:00:00.000Z",
    time: "9:00 am - 10:00 am",
  },
  {
    id: 2,
    subject: "Art",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-03T00:00:00.000Z",
    time: "10:00 am - 11:00 am",
  },
  {
    id: 3,
    subject: "Maths",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-04T00:00:00.000Z",
    time: "10:00 pm - 11:00 pm",
  },
  {
    id: 4,
    subject: "Urdu",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-05T00:00:00.000Z",
    time: "1:00 am - 11:00 am",
  },
  {
    id: 5,
    subject: "Pakistan Study",
    test: "45-47",
    homeWork: "79-80",
    date: "2021-01-06T00:00:00.000Z",
    time: "1:00 pm - 2:00 pm",
  },
];
import { COLORS, FONTS, icons } from "./../../../constants";
import MonthController from "./../schedualMonthController/monthController";
import DatePicker from "./../dataPicker/dataPicker";
import HomeWorkTile from "./../homeWrokTile/homeWrokTile";
import ExtraCariculamTile from "../extraCariculamTile/extraCariculamTile";
import TimeTableTile from "../timeTableTile/timeTableTile";
const TimeTable = () => {
  let [clicked, setClicker] = useState(-1);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClicker(item.id);
        }}
      >
        <TimeTableTile
          title={item.date.substring(8, 10)}
          id={item.id}
          item={item}
        />
        {/* Item */}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MonthController type={"days"} />

      <View
        style={{
          justifyContent: "center",
          flex: 1,
          backgroundColor: COLORS.softWhite,
        }}
      >
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            vertical
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const HomeWork = () => {
  let [clicked, setClicker] = useState(-1);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClicker(item.id);
        }}
      >
        <HomeWorkTile
          title={item.date.substring(8, 10)}
          id={item.id}
          item={item}
        />
        {/* Item */}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MonthController type={"months"} />
      <View
        style={{
          height: "12%",
          paddingLeft: "1%",
          backgroundColor: COLORS.softWhite,
          marginTop: 5,
          borderTopWidth: 3,
          borderBottomWidth: 1,
          elevation: 5,
          borderBottomColor: COLORS.lightGray,
          borderTopColor: COLORS.lightGray,
        }}
      >
        <DatePicker />
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            vertical
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
const ExtraCariculam = () => {
  let [clicked, setClicker] = useState(-1);
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setClicker(item.id);
        }}
      >
        <ExtraCariculamTile
          title={item.date.substring(8, 10)}
          id={item.id}
          item={item}
        />
        {/* Item */}
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <MonthController type={"months"} />
      <View
        style={{
          height: "12%",
          paddingLeft: "1%",
          backgroundColor: COLORS.softWhite,
          marginTop: 5,
          borderTopWidth: 3,
          borderBottomWidth: 1,
          elevation: 5,
          borderBottomColor: COLORS.lightGray,
          borderTopColor: COLORS.lightGray,
        }}
      >
        <DatePicker />
      </View>
      <View
        style={{
          justifyContent: "center",
          flex: 1,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            vertical
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};
const SchedualScreen = ({ menu }) => {
  // pass the screen condition to manage the states
  if (menu === "Screen1") return <TimeTable />;
  if (menu === "Screen2") return <HomeWork />;
  if (menu === "Screen3") return <ExtraCariculam />;
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
export default SchedualScreen;
