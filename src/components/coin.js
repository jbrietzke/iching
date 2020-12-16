import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';

const Coin = (props) =>  {
    const [face, setFace] = useState(props.default)
    const flipCoin = () => {
        setFace(determineFace())
    }
    const determineFace = () => {
        const result = Math.round(Math.random())
        const newFace = result ? props.head : props.tail
        const points = newFace == props.head ? 3 : 2
        props.adjustScore(points)
        return newFace
    }
    return (
        <TouchableOpacity
            onPress={flipCoin}>
            <Image 
                style = {styles.coin}
                source = {face}
            />
        </TouchableOpacity>
    )
}
// const heads = require('../assets/heads.jpg')
// const tails = require('../assets/tails.jpg')

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