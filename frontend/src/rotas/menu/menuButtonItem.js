import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuButtonItem = ({ text, onPress }) => {
    return(
        <TouchableOpacity onPress={ onPress } style={styles.container}>
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    )
}

export default MenuButtonItem;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#38B5DF',
        marginBottom: 10,
        padding: 20
    },
    text:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center'
    }
})