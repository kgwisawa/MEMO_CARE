import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import Moment from "moment";
import { Border } from "victory-native";
class TimeLineScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      date: Moment().utcOffset("GMT+7").format("h:mm:ss a"),
    };
  }

  render() {
    // setInterval(() => {
    //   const now = Moment().utcOffset('GMT+7').format('MMMM Do YYYY')
    //   this.setState({
    //     date: now,
    //   });
    // }, 60000);
    // console.warn(CalendarStrip.getSelectedDate())
    
    return (
      <View>
        <View
          style={{
            height: 130,
            backgroundColor: "#6743E1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginTop: 60 }}>
            <Text
              style={[styles.headtext, styles.shadowProp, { fontSize: 35 }]}
            >
              Timeline
            </Text>
          </View>
        </View>

        <CalendarStrip
          scrollable
          style={[
            { height: 150, paddingTop: 10, paddingBottom: 10 },
            styles.shadowProp,
          ]}
          calendarColor={"#6743E1"}
          selectedDate={Moment()}
          // calendarHeader={1}
          
          calendarHeaderStyle={[{ fontSize: 25 }, styles.headtext]}
          customDatesStyles={customDatesStylesFunc}
          iconContainer={{ flex: 0.0001 }}
          highlightDateNumberStyle={{
            color: "#fcb900",
            fontSize: 15,
            fontFamily: "HAIDUO1T",
          }}
          highlightDateNameStyle={{
            color: "#fcb900",
            fontSize: 15,
            fontFamily: "HAIDUO1T",
          }}
          daySelectionAnimation={{
            type: "border",
            duration: 200,
            borderWidth: 3,
            borderHighlightColor: "#fcb900",
          }}
        />
      </View>
    );
  }
}

export default TimeLineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  headtext: {
    fontFamily: "HAIDUO1T",

    color: "#FFFFFF",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  contenttext: {
    fontFamily: "HAIDUO1T",
    color: "#000000",
    fontSize: 17,
    marginTop: "-20%",
  },
  detailtxt: {
    fontFamily: "HAIDUO1T",
    color: "#7C828A",
    fontSize: 16,
  },
  viewcontent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    marginTop: "-8%",
  },
  txtinPi: {
    fontSize: 18,
    fontFamily: "HAIDUO1T",
    color: "#000000",
  },
});
const customDatesStylesFunc = (date) => {
  
  // console.warn("day2:",Moment().utcOffset("GMT+7").format('L'))
  let sum = Moment().format('llll').replace(",", "");
  sum = sum.replace(",", "")
  sum = sum.substring(15, 0)
  //  date.toString()
   let s = date.toString().substring(15, 0)
  // sum = sum.replace("/", "-") .substring(10, 0) + "T05:00:00.000Z"
  
  
  if (s == sum) {
    
    return {
      dateNameStyle: { color: "#eb144c", fontSize: 18, fontFamily: "HAIDUO1T" },
      dateNumberStyle: {
        color: "#eb144c",
        fontSize: 18,
        fontFamily: "HAIDUO1T",
      },
    };
  } else if (date.isoWeekday() === 7) {
    return {
      dateNameStyle: { color: "#ffcdd2", fontSize: 18, fontFamily: "HAIDUO1T" },
      dateNumberStyle: {
        color: "#ffcdd2",
        fontSize: 18,
        fontFamily: "HAIDUO1T",
      },
    };
  } else {
    return {
      dateNumberStyle: [{ fontSize: 18 }, styles.headtext],
      dateNameStyle: [{ fontSize: 18 }, styles.headtext],
    };
  }
};

  