import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Coin from './coin'

class ConsultScreen extends React.Component {
  constructor() {
    super()
    this.state = {
        score: 0
    }
  }
  increment = () => {
    this.setState({score: ++this.state.score})
  }
  render(){
    return (
      <View style={styles.screen}>
        <Text>Consult Screen</Text>
        <Coin increment={this.increment}/>
        <Coin increment={this.increment}/>
        <Coin increment={this.increment}/>
        <Text>{this.state.score}</Text>
      </View>
    );
  }
    
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})

export default ConsultScreen
