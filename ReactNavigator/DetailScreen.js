import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';
import NextScreen from './NextScreen';
export default class DetailScreen extends Component<{}> {

  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Button
          onPress={() => this.props.navigation.navigate('NextScreen')}
          title="Go to NextScreen"
        />
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
