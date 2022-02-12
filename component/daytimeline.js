import { StatusBar } from "expo-status-bar";
import CalendarStrip from 'react-native-calendar-strip';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

function Daytime() {
  let sum = day();
  return (

<View style={styles.container}>
        <CalendarStrip
          scrollable
          style={{height:200, paddingTop: 20, paddingBottom: 10}}
          calendarColor={'#3343CE'}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
        />
      </View>
  );
}

export default Daytime;

const styles = StyleSheet.create({
  viewday: {
    backgroundColor: "#FFFFFF",
    width: 60,
    height: 80,
    borderRadius: 100,
    marginTop: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  container: { flex: 1 }
});

function renderday(item,index){
    return (
        <View style={styles.container}>
        <CalendarStrip
          scrollable
          style={{height:200, paddingTop: 20, paddingBottom: 10}}
          calendarColor={'#3343CE'}
          calendarHeaderStyle={{color: 'white'}}
          dateNumberStyle={{color: 'white'}}
          dateNameStyle={{color: 'white'}}
          iconContainer={{flex: 0.1}}
        />
      </View>
    )
}

function day() {
  let x = [];
  for (var i = 0; i < 29; i++) {
    x.push(
      <View style={styles.viewday}>
        <Text>{i}</Text>
      </View>
    );
  }
  return x;
}
