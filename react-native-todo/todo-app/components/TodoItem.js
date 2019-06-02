import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {

  render () {

    return (
      <TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  }
})