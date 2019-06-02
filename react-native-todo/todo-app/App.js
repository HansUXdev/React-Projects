import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Header  from './components/Header';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Take out trash', done: false},
        {id: 1, title: 'Dishes', done: false}
      ]
    }
  }

    

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
    return (
      <View style={styles.container}>
        {statusbar}
        <Header title="Pickle Rick boys !"/>
        {/* <View style={styles.statusbar}></View> */}
        {/* <Text>My first fucking app boys!</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 20
  }, 
});
