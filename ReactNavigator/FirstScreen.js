import React, { Component } from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { View, Text, Button, StyleSheet } from 'react-native';
export default class FirstScreen extends Component<{}> {

  static navigationOptions = {
    title: 'FirsScreen',
    headerLeft: null
  };

  backDetailsScreen(){
    const resetAction = NavigationActions.reset({
    index: 1,
    actions: [
      NavigationActions.navigate({ routeName: 'Home'}),
      NavigationActions.navigate({ routeName: 'Details'})
    ]
  })
    this.props.navigation.dispatch(resetAction)

  }
backNextScreenScreen(){
  const resetAction = NavigationActions.reset({
  index: 2,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'}),
    NavigationActions.navigate({ routeName: 'Details'}),
    NavigationActions.navigate({ routeName: 'NextScreen'})
  ]
})
  this.props.navigation.dispatch(resetAction)

}
detailAsRoute(){
  const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Details'})
  ]
})
  this.props.navigation.dispatch(resetAction)
}
dismissAll(){
  const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})
  this.props.navigation.dispatch(resetAction)
}



  render() {
    return (
      <View style={styles.container}>
        <Text>FirstScreen</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go Back"
        />
        <Button
          onPress={() => this.detailAsRoute()}
          title="Details as Route"
        />
        <Button
          onPress={() => this.backDetailsScreen()}
          title="Back to Details"
        />
        <Button
          onPress={() => this.backNextScreenScreen()}
          title="Back to NextScreen"
        />
        <Button
          onPress={() => this.dismissAll()}
          title="Dismiss All View"
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
