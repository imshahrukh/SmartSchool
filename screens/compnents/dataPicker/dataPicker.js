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
} from "react-native";
import { COLORS,FONTS } from "../../../constants";

const DATA = [
  { id: 0, date: "2021-01-01T00:00:00.000Z" },
  { id: 1, date: "2021-01-02T00:00:00.000Z" },
  { id: 2, date: "2021-01-03T00:00:00.000Z" },
  { id: 3, date: "2021-01-04T00:00:00.000Z" },
  { id: 4, date: "2021-01-05T00:00:00.000Z" },
  { id: 5, date: "2021-01-06T00:00:00.000Z" },
  { id: 6, date: "2021-01-07T00:00:00.000Z" },
  { id: 7, date: "2021-01-08T00:00:00.000Z" },
  { id: 8, date: "2021-01-09T00:00:00.000Z" },
  { id: 9, date: "2021-01-10T00:00:00.000Z" },
  { id: 10, date: "2021-01-11T00:00:00.000Z" },
  { id: 11, date: "2021-01-12T00:00:00.000Z" },
  { id: 12, date: "2021-01-13T00:00:00.000Z" },
  { id: 13, date: "2021-01-14T00:00:00.000Z" },
  { id: 14, date: "2021-01-15T00:00:00.000Z" },
  { id: 15, date: "2021-01-16T00:00:00.000Z" },
  { id: 16, date: "2021-01-17T00:00:00.000Z" },
  { id: 17, date: "2021-01-18T00:00:00.000Z" },
  { id: 18, date: "2021-01-19T00:00:00.000Z" },
  { id: 19, date: "2021-01-20T00:00:00.000Z" },
  { id: 20, date: "2021-01-21T00:00:00.000Z" },
  { id: 21, date: "2021-01-22T00:00:00.000Z" },
  { id: 22, date: "2021-01-23T00:00:00.000Z" },
  { id: 23, date: "2021-01-24T00:00:00.000Z" },
  { id: 24, date: "2021-01-25T00:00:00.000Z" },
  { id: 25, date: "2021-01-26T00:00:00.000Z" },
  { id: 26, date: "2021-01-27T00:00:00.000Z" },
  { id: 27, date: "2021-01-28T00:00:00.000Z" },
  { id: 28, date: "2021-01-29T00:00:00.000Z" },
  { id: 29, date: "2021-01-30T00:00:00.000Z" },
  { id: 30, date: "2021-01-31T00:00:00.000Z" },
];
const days = ['MO','TU','WE','TH','FR','SA','SU']

const getDays = (date)=>{
  let newDate =new Date(date);
  return newDate.getDay();
}
const Item = ({ title,id ,item}) => (

  <View style={[styles.item,{backgroundColor:id===item.id? COLORS.blue:COLORS.softWhite}]}>
    <Text style={[styles.title,{...FONTS.h2,color:id===item.id? COLORS.white:COLORS.darkBlue}]}>{title}</Text>
    <Text style={{...FONTS.h2,color:id===item.id? COLORS.white:COLORS.darkBlue,...FONTS.body3}}>{days[getDays(item.date)]}</Text>  
  </View>
);

const DatePicker = () => {
  let [clicked,setClicker] = useState(-1);

  const renderItem = ({ item }) =>{
    return (
        <TouchableOpacity
            onPress={()=>{setClicker(item.id)}}
        >
            <Item title={item.date.substring(8, 10)} id={clicked} item={item} /> 
        </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: '1%',
    paddingLeft:14,
    paddingRight:14,
    marginHorizontal: 5,
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
    // fontWeight:500
  },
  title: {
    fontSize: 24,
  },
});

export default DatePicker;
