import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {


    return (
        <View style={styles.containerPai}>

            <Text style={styles.title}>
                {props.title}
            </Text>

            <Text style={styles.text}>
                Autor: {props.author}
            </Text>

            <Text style={styles.text}>
                Editora: {props.publishi}
            </Text>

            <Text style={styles.text}>
                Disponível Para: {props.action}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({

    containerPai: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        fontSize: 25,
        color: "#000",
        alignItems: 'center',
        fontWeight: 'bold'
    },
    text: {
        color: '#444',        
        fontSize: 15,
        fontWeight: 'bold'
    }
})