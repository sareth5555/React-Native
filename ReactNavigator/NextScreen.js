import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';
import FirstScreen from './FirstScreen';
export default class NextScreen extends Component<{}> {

  static navigationOptions = {
    title: 'NextScreen',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>NextScreen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('First')}
          title="Go to FirstScreen"
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
