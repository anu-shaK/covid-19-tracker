import React from 'react';
import {Text, View, StyleSheet} from "react-native"

export default function Card({title, color, data}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={[styles.value, color={color}]}>{data}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        width: "90%",
        backgroundColor:"white",
        height: "15%",
        elevation: 10,
        marginTop: 10,
        borderRadius: 10
    },
    text:{
        color: "#000",
        fontWeight: "bold",
        textAlign:"center",
        padding: 20
    },
    value:{
        fontWeight: "bold",
        textAlign:"center",
        fontSize: 28
    }
})