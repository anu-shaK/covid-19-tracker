import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'


export default function Totals({country}) {
   
    const date = new Date().toDateString();

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.heading}>Total Cases</Text>
            <Text style={styles.subHeading}>{country && country.TotalConfirmed}</Text>
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
        fontSize: 18,
        paddingTop: 10,
        paddingLeft: 15,

    },
    subHeading:{
        fontWeight:"bold",
        fontSize: 35,
        paddingTop:5,
        paddingLeft: 15,
    }
})
