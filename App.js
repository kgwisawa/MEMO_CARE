import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Dimensions ,Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MemoScreen from "./main_screen/MemoScreen";
import HomeScreen from "./main_screen/HomeScreen";
import TimeLineScreen from "./main_screen/TimeLineScreen";
import AboutUsSreen from "./main_screen/AboutUsSreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useState } from "react";





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    'HAIDUO1H': require("./assets/font/HAIDUO1H.ttf"),
    'HAIDUO1T': require("./assets/font/HAIDUO1T.ttf")
    
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const tabOffsetValue = new Animated.Value(0);
  

  return (
    
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) =>({
        tabBarActiveTintColor: "#967DEA",                 
        tabBarInactiveTintColor:"#908F8F",
        tabBarLabelStyle:{
          fontFamily:'HAIDUO1T',
    fontSize: 10
    ,marginBottom:"-10%"
    
        }
      
      }
      )
        
      }>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          style={{}}
          options={{
            
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/home_icon3.png")}
                resizeMode="contain"
                style={[
                  styles.icon_bar,
                  {
                    tintColor: focused ? "#967DEA" : "#908F8F"
                  },
                  
                ]}
              />
            ),
          }} listeners={({navigation,route}) =>({
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue:0,
                useNativeDriver:true
              }).start()
            }
          })}
        />

        <Tab.Screen
          name="TimeLine"
          component={TimeLineScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/calendar_icon3.png")}
                resizeMode="contain"
                style={[
                  styles.icon_bar,
                  {
                    tintColor: focused ? "#967DEA" : "#908F8F",
                  },
                ]}
              />
            ),
          }}
          listeners={({navigation,route}) =>({
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue:getWidth() *1,
                useNativeDriver:true
              }).start()
            }
          })}
        />
        <Tab.Screen
          name="Memo"
          component={MemoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/memo_icon3.png")}
                resizeMode="contain"
                style={[
                  styles.icon_bar,
                  {
                    tintColor: focused ? "#967DEA" : "#908F8F",
                  },
                ]}
              />
            ),
          }}
          listeners={({navigation,route}) =>({
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue:getWidth()*2,
                useNativeDriver:true
              }).start()
            }
          })}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsSreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/about_icon3.png")}
                resizeMode="contain"
                style={[
                  styles.icon_bar,
                  {
                    tintColor: focused ? "#967DEA" : "#908F8F",
                  },
                ]}
              />
            ),
          }}
          listeners={({navigation,route}) =>({
            tabPress: e =>{
              Animated.spring(tabOffsetValue,{
                toValue:getWidth()*3,
                useNativeDriver:true
              }).start()
            }
          })}
        />
      </Tab.Navigator>

      
      <Animated.View style={{
        width:getWidth(),
        height:5,
        backgroundColor:'#967DEA',
        position:'absolute',
        bottom:73.5,
        
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        transform:[
          {translateX: tabOffsetValue }
        ]

      }}>

      </Animated.View>
    </NavigationContainer>
  );
}

function getWidth(){
  let width = Dimensions.get("window").width

  width = width

  return width/4
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  icon_bar: {
    width: 25,
    height: 25,
    marginBottom:"-15%"
   
  },
  txt:{
    fontFamily: 'HAIDUO1T',
     }
});

