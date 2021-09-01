import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { COLORS, FONTS, icons } from "../constants";
import ProfileTile from "./compnents/ProfileTile/prfileTile";
import TopInformationBar from "./compnents/TopInformationBar/_topInformationBar";

const Profile = () => {
  return (
    <View style={[styles.container]}>
      <TopInformationBar menu={"Profile"} />
      {/* Top */}
      <View style={styles.profileTop}>
        {/* Information Containor */}
        <View style={styles.infoContainor}>
          {/* Nmae and Age School View */}

          <View style={styles.infoContainor_body}>
            <View style={styles.containor_NameUni}>
              <Text style={styles.name}>SHAHRUKH</Text>
              <Text style={styles.year}>{"   "}( 23 Yr ) </Text>
            </View>
            <View style={styles.containor_report}>
              <Image
                source={icons.chemistry}
                resizeMode="contain"
                style={styles.profile_img}
              ></Image>
              <Text style={styles.uni}> COMSATS </Text>
            </View>
          </View>
          {/* Attandence and Marks and class View */}

          <View style={styles.report}>
            {/* attendence */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>98%</Text>
              <Text>Attandence</Text>
            </View>
            {/* attendence */}
            {/* marks */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>7.8</Text>
              <Text>Avg Marks</Text>
            </View>
            {/* marks */}
            {/* class */}
            <View style={styles.reportBox}>
              <Text style={styles.reportBox_figure}>2</Text>
              <Text>Class</Text>
            </View>
            {/* class */}
          </View>
        </View>

        {/* Image Contaior */}
        <View
          style={{
            position: "absolute",
            width: "25%",
            height: "50%",
            borderRadius: 200 / 2,
            backgroundColor: COLORS.gray,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginBottom: 25,
          }}
        >
          <Image
            source={icons.profile}
            resizeMode="contain"
            style={{
              width: "70%",
              height: "70%",
              tintColor: COLORS.softWhite,
              marginRight: "5%",
              zIndex: 2,
            }}
          ></Image>
        </View>
      </View>
      {/* body */}
      <View
        style={{
          flex: 1,
          marginTop: "35%",
          backgroundColor: COLORS.darkBlue,
          position: "relative",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <ProfileTile message={"Update Profile"} />
            <ProfileTile message={"Student Info"} />
            <ProfileTile message={"Student Progress"} />
            <ProfileTile message={"Time Table"} />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.softWhite,
  },
  shadow: {
    // shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    // shadowRadius: 4.65,
    zIndex: -1,
    elevation: 8,
  },
  profileTop: {
    width: "100%",
    height: "25%",
    backgroundColor: COLORS.darkBlue,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  infoContainor: {
    position: "absolute",
    width: "80%",
    height: "120%",
    top: "50%",
    backgroundColor: COLORS.lightGray,
    borderRadius: 20,
    padding: "5%",
  },
  infoContainor_body: {
    height: "40%",
    width: "100%",
    backgroundColor: COLORS.softWhite,
    marginTop: "11%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  containor_NameUni: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    ...FONTS.body2,
    color: COLORS.darkBlue,
    fontWeight: "700",
  },
  year: {
    ...FONTS.body3,
    color: COLORS.darkBlue,
  },
  containor_report: {
    display: "flex",
    flexDirection: "row",
    marginTop: 7,
    alignItems: "center",
  },
  profile_img: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray,
    marginRight: "5%",
  },
  uni: {
    ...FONTS.body2,
    color: COLORS.gray,
    fontWeight: "600",
  },
  report: {
    height: "40%",
    width: "100%",
    //   backgroundColor: COLORS.yellow,
    marginTop: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.softWhite,
    marginBottom: 5,
    //   marginTop: "12%",
  },
  reportBox: {
    width: "30%",
    borderWidth: 2,
    borderColor: COLORS.lightGray,
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  reportBox_figure: {
    ...FONTS.body2,
    color: COLORS.darkBlue,
    fontWeight: "700",
  },
});

export default Profile;
