import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';

class Coin extends React.Component {
    constructor() {
        super()
        this.state = {
            face: heads,
        }
    }
    flipCoin = () => {
        this.setState({
            face: this.determineFace()
        }, () => {
            if(this.state.face == heads) this.props.increment()
        })
        if(this.state.face == heads) this.props.increment()
    }
    determineFace = () => {
        result = Math.round(Math.random())
        return result ? heads : tails
    }
        
    render() {
        return (
            <TouchableOpacity
                onPress={this.flipCoin.bind(this)}>
                <Image 
                    style = {styles.coin}
                    source = {this.state.face}
                />
            </TouchableOpacity>
        )
    }
}
const heads = require('../assets/heads.jpg')
const tails = require('../assets/tails.jpg')

const styles = {
    coin: {
        borderRadius: 500,
        height: 100,
        width: 100
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }
}

export default Coin