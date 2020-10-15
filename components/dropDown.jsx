import React, {useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Picker} from "@react-native-community/picker"
import {getCountries} from "../api"


export default function DropDown() {
    const [countries, setCountries] = useState([]);
    const fetchCountries = async() => {
        try {
            const countries = await getCountries();
            setCountries(countries);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchCountries();
    })
    
        return (
            <View>
                <Picker selectedValue={"None"}
                style={{width: 100}}
                >
                {countries && countries.map((country) => <Picker.Item key={country.ISO2} label={country.Country} value={country.Country}/>)}
                </Picker>
            </View>
        )
    

    
}

const styles = StyleSheet.create({})
