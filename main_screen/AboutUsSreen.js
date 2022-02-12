import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

function AboutUsSreen() {
  const image = require("../assets/BG3.png");
    return(
<View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <View style={{ width: "100%", height: 350 }}>
            <ImageBackground
              source={image}
              resizeMode="cover"
              style={[styles.image, { marginTop: -37, alignItems: "center" }]}
            >

            </ImageBackground>
          </View>
      </View>
      </View>
    );
  }

  export default AboutUsSreen

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
      justifyContent:'center',
      flexDirection: "column",
      flex: 1,
      marginTop:'-8%'
    },
    txtinPi: {
      fontSize: 18,
      fontFamily: "HAIDUO1T",
      color: "#000000",
    },
  });