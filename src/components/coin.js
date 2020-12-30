import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

const Coin = (props) =>  {
    const coinFaces = useSelector(state => state.coinFaces)
    return (
        <TouchableOpacity>
            <Image 
                style = {styles.coin}
                source = {coinFaces.facesArr[props.coinNum]}
            />
        </TouchableOpacity>
    )
}

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