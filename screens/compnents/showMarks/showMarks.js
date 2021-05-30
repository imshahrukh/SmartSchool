import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";
import { COLORS, FONTS } from "./../../../constants";
import DATA from "./../../data/marks";
let subject = "Science";
// get the subject information

const Item = ({ item }) => {
  console.log("title");
  return (
    <View
      style={{
        backgroundColor: COLORS.softWhite,
        height: 60,
        margin: 8,
        marginBottom: 2,
        elevation: 5,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View style={{ flexDirection: "row", width: 120, marginLeft: 25 }}>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.waterBlue,
              fontWeight: "700",
            }}
          >
            {item.obtain_marks}
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.darkBlue,
              //   fontWeight: "700",
              marginLeft: 10,
            }}
          >
            {item.type}
          </Text>
        </View>
        <View>
          <Text
            style={{
              ...FONTS.body4,
              color: COLORS.darkBlue,
              marginLeft: -5,
            }}
          >
            {item.date}
          </Text>
        </View>
      </View>
    </View>
  );
};
const getMarks = (type, array) => {
  if (type == "Week") return array.week;
  if (type == "Month") return array.month;
  if (type == "Semester") return array.semester;
};

const ShowMarks = ({ type }) => {
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  let subjectMarks = DATA.filter((item) => item.subject == subject);
  let marks = getMarks(type, subjectMarks[0]);
  console.log(marks);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={marks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.darkBlue,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ShowMarks;
