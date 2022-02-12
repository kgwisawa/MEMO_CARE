import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground ,Image} from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import Moment from 'moment';
class TimeLineScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      date:Moment().utcOffset('GMT+7').format('h:mm:ss a'),
   
    };
  }

  
  render () {
    // setInterval(() => {
    //   const now = Moment().utcOffset('GMT+7').format('MMMM Do YYYY')
    //   this.setState({
    //     date: now,
    //   });
    // }, 60000);
    
    return (
    <View >

       <View style={{height:130,backgroundColor:'#6743E1',alignItems:'center',justifyContent:'center'}}>
              <View style={{marginTop:60}}>
                <Text style={[styles.headtext, styles.shadowProp, { fontSize: 35 }]}>Timeline {this.state.date}</Text>
              </View>
       </View>
        
        <CalendarStrip
          scrollable
          style={[{height:150, paddingTop: 10, paddingBottom: 10},styles.shadowProp]}
          calendarColor={'#6743E1'}
          calendarHeaderStyle={[{color: 'white',fontSize: 25},styles.headtext]}
          dateNumberStyle={[{color: 'white',fontSize: 18},styles.headtext]}
          dateNameStyle={[{color: 'white',fontSize: 18 },styles.headtext]}
          iconContainer={{flex: 0.1}}
          borderWidth={1}
          
        />
      
     
     
    </View>)
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

  // // Get the currently selected date (Moment JS object)
  // getSelectedDate = () => {
  //   if (!this.state.selectedDate || this.state.selectedDate.valueOf() === 0) {
  //     return; // undefined (no date has been selected yet)
  //   }
  //   return this.state.selectedDate;
  // }

    //Function that checks if the locale is passed to the component and sets it to the passed date
    // setLocale = date => {
    //   let _date = date && moment(date);
    //   if (_date) {
    //     _date.set({ hour: 12}); // keep date the same regardless of timezone shifts
    //     if (this.props.locale) {
    //       _date = _date.locale(this.props.locale.name);
    //     }
    //   }
    //   return _date;
    // }