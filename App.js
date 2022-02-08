import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import  MemoScreen  from './screen/MemoScreen';
import  HomeScreen  from './screen/HomeScreen';


function AboutUsSreen() {
  return(
    <View style={styles.container}>
      <Text>AboutUs</Text>
    </View>
  );
}
function TimeLineScreen() {
  return (
    <View style={styles.container}>  
      <Text>Timeline</Text>
    </View>
  );
}



const Tab =createBottomTabNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Timeline" component={TimeLineScreen}/>
        <Tab.Screen name="Memo" component={MemoScreen}/>
        <Tab.Screen name="About us" component={AboutUsSreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});