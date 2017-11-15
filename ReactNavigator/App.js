import React from 'react';
import { StackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';
import DetailScreen from './DetailScreen';
import FirstScreen from './FirstScreen';
import NextScreen from './NextScreen'

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="Go to details"
        />
      </View>
    );
  }
}


const RootNavigator = StackNavigator({
  Home: {
    screen: MainScreen,
  },
  Details: {
    screen: DetailScreen,
  },
  NextScreen: {
    screen: NextScreen,
  },
  First: {
    screen: FirstScreen,
  },
});

export default RootNavigator;
