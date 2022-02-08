import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function MemoScreen() {
    return(
      <View style={styles.container}>
        <Text>Memo</Text>
      </View>
    );
  }

  export default MemoScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });