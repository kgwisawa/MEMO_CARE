import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
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
  
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={({route}) =>({
        tabBarActiveTintColor: "#967DEA",                 
        tabBarInactiveTintColor:"#908F8F",
        tabBarLabelStyle:{
          fontFamily:'HAIDUO1T',
    fontSize: 10,
    
    
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
                source={require("./assets/home_icon.png")}
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
        />

        <Tab.Screen
          name="TimeLine"
          component={TimeLineScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/calendar_icon.png")}
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
        />
        <Tab.Screen
          name="Memo"
          component={MemoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/memo_icon.png")}
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
        />
        <Tab.Screen
          name="About Us"
          component={AboutUsSreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/about_icon.png")}
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
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default App;

// export default function App() {
//   return (
//     <View style={{ flex: 8 }}>

//       <View style={{ flex: 1 }}>
//         <Image source={require("./assets/BG.png")} />
//       </View>
//       {/* <NavigationContainer>

//           <Tab.Navigator>

{
  /* <Tab.Screen name="Home" component={HomeScreen}/>
<Tab.Screen name="Timeline" component={TimeLineScreen}/>
<Tab.Screen name="Memo" component={MemoScreen}/>
<Tab.Screen name="About us" component={AboutUsSreen}/> */
}
// </Tab.Navigator>

//     </NavigationContainer> */}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  icon_bar: {
    width: 25,
    height: 25,
   
  },
  txt:{
    fontFamily: 'HAIDUO1T',
     }
});

