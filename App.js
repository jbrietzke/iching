import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/homeScreen'
import ConsultScreen from './src/components/consultScreen'
import ReadingScreen from './src/components/readingScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, connect } from 'react-redux'
import combineReducer from './src/store/configureStore'
import countReducer from './src/reducers/count'
import { createStore } from 'redux'
import configureStore from './src/store/configureStore';

const Stack = createStackNavigator()
// const store = createStore(combineReducer)
const store = configureStore()




const App = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name="Consult" component={ConsultScreen} />
        <Stack.Screen name='Reading' component={ReadingScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
    
  );
}

export default App