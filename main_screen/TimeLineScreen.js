import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';

function TimeLineScreen() {
    return(
      <View style={[styles.container,{flex:1,justifyContent:'flex-start'}]}>
      
      <Image style={{marginTop:-34}} source={require('../assets/BG.png')}></Image>
      
      </View>
    );
  }

  export default TimeLineScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });