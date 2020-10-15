import React, {useEffect} from 'react'
import { StyleSheet, Text, View} from 'react-native'
 import {getData} from "../api"

export default function Totals() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{month},{day},{year}</Text>
            <Text style={styles.heading}>Total Cases</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "90%",
        backgroundColor: "white",
    },
    date:{
        color: "black",
        fontWeight: "bold",
        paddingTop: 20,
        paddingLeft: 15,
    },
    heading:{
        color: "black",
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 15,
    },
    subHeading:{
        fontWeight:"bold",
        fontSize: 30,
        paddingTop:10,
        paddingLeft: 15,
    }
})
