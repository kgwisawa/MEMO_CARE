import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

class HomeScreen extends React.Component{
  
    constructor()
    {
      super();
      this.state = {
        
        todayCases: "",
        todayDeaths:"",
        todayRecovered:""
      }
    }
    componentDidMount()
    {
      this.apiCall();
    }
    async apiCall(){
      let resp =await fetch('https://static.easysunday.com/covid-19/getTodayCases.json')
      let respJson=await resp.json()
      // console.warn(respJson.todayCases)
      this.setState({todayCases:respJson.todayCases,todayDeaths:respJson.todayDeaths,todayRecovered:respJson.todayRecovered})
      
    }
 
  render() {


    let todayCases = this.state.todayCases;
    let todayDeaths = this.state.todayDeaths;
    let todayRecovered = this.state.todayRecovered;

    return (
 

        <View style = {{flex:1}}>
        <View style = {{flex: 1,alignItems: 'center',justifyContent:'flex-start'}}>
        <View style={{flex:1,justifyContent:'flex-start'}}>
      
        <Image style={{marginTop:-34}} source={require('../assets/BG.png')}></Image>
      
      </View>
      <View style={{flex:1,justifyContent:'flex-start'}}>
        <Text style = {{ fontFamily:'HAIDUO1H',fontSize:30}}>Daily New Cases</Text>
          <Text style={{fontFamily:'HAIDUO1H',fontSize:30}}>{todayCases}</Text>
          {/* <Text>todayDeaths: {todayDeaths}</Text>
          <Text>todayRecovered: {todayRecovered}</Text> */}
          </View>
        </View>
       
      

        </View>
    );
  }
}
export default HomeScreen;

