import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { useState } from "react";

import { COLORS, FONTS } from "../constants";
import TopInformationBar from "./compnents/TopInformationBar/_topInformationBar";
import MraksNavigator from "./compnents/MarkNavigator/marksNavigator";
import DATA from "./data/marks";
import ShowMarks from "./compnents/showMarks/showMarks";
// import { COLORS, FONTS, icons } from "./../constants";

// Component to render

const SubjectDisplay = ({ items }) => (
  <View
    style={{
      width: 300,
      height: "90%",
      backgroundColor: COLORS.blue,
      margin: 10,
    }}
  >
    <Text
      style={{
        color: COLORS.white,
        ...FONTS.body1,
        marginTop: "10%",
        marginLeft: "10%",
      }}
    >
      {items.subject}
    </Text>
    <Text
      style={{
        color: COLORS.white,
        ...FONTS.body3,
        position: "absolute",
        bottom: "10%",
        right: "15%",
      }}
    >
      Avg.marks {"   "}
      <Text
        style={{
          ...FONTS.body1,
        }}
      >
        8
      </Text>
    </Text>
  </View>
);
const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.softWhite,
      }}
    >
      <SubjectDisplay items={item} />
    </TouchableOpacity>
  );
};

// startt
const Marks = () => {
  let [select, setSelect] = useState(2);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {/* top heading and notfcation button */}
        <TopInformationBar menu={"Marks"} />

        <SafeAreaView
          style={[
            styles.shadow,
            {
              height: 150,
              padding: 2,
              backgroundColor: COLORS.gray,
              marginBottom: "1%",
            },
          ]}
        >
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </SafeAreaView>

        {/* MArks naviagetor */}
        <View>
          <MraksNavigator />
        </View>

        {/* show marks details as per user requirment */}
        <View
          style={{
            flex: 1,
            // backgroundColor: COLORS.blue,
            width: "100%",
          }}
        >
          {select == 1 ? <ShowMarks type={"Week"} /> : null}
          {/* Homw Work */}
          {select == 2 ? <ShowMarks type={"Month"} /> : null}
          {/* Extra Cariculam */}
          {select == 3 ? <ShowMarks type={"Semester"} /> : null}
        </View>
      </View>

      {/* flate List */}
    </View>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

export default Marks;
