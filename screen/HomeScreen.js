import React from 'react';
import { FlatList, Text, View } from 'react-native';

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
      console.warn(respJson.todayCases)
      this.setState({todayCases:respJson.todayCases,todayDeaths:respJson.todayDeaths,todayRecovered:respJson.todayRecovered})
      
    }
 
  render() {
    let todayCases = this.state.todayCases;
    let todayDeaths = this.state.todayDeaths;
    let todayRecovered = this.state.todayRecovered;
    
    return (
 

        <View style = {{flex:1}}>
        <View style = {{flex: 1,alignItems: 'center',justifyContent: 'center'}}>

        <Text style = {{ fontSize: 15}}>API CALL</Text>
          <Text>todayCases: {todayCases}</Text>
          <Text>todayDeaths: {todayDeaths}</Text>
          <Text>todayRecovered: {todayRecovered}</Text>
        </View>
       
      

        </View>
    );
  }
}
export default HomeScreen;
