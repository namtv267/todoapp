/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: '#fafafa',
        fontSize: 18,
      }}>Welcome to my first app</Text>
      <Text style={styles.title}>Todo list</Text>
      <Button title='Hello' onPress={() => {
        console.log('Press button')
      }}/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontWeight: '700',
    fontSize: 22,
    color: '#fff'
  }
})
