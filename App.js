import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View , TouchableOpacity, Modal, TextInput, FlatList , Image , SafeAreaView } from 'react-native';
import Feed from './Feed';

class App extends Component {

  render()
  {
  return (
  
    <View style={styles.container}>
      
      <Feed ></Feed>
    </View>
  )
  }

}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
