import React, {useEffect, useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Picker} from "@react-native-community/picker"
import {getCountries} from "../api"


export default function DropDown({onSelectCountry}) {
    const [countries, setCountries] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");

    // Get countries list
    const fetchCountries = async() => {
        try {
            const countries = (await getCountries()).sort((a,b)=>(a.Country > b.Country ? 1 : -1));
            setCountries(countries);
            } 
        catch (error) 
            {
            console.log(error);
            }
    }
    useEffect(() => {
        let mounted = true;
        if(mounted){
            fetchCountries();
        }
      return () => mounted = false;
    },[])

        return (
            <View style={styles.container}>
                <Picker 
                selectedValue={selectedValue}
                style={styles.dropDown}
                mode="dropdown"
                onValueChange = {(value) => {setSelectedValue(value), onSelectCountry(value)}}
                >
                {countries && countries.map((country) => <Picker.Item key={country.ISO2} label={country.Country} value={country.Country}/>)}
                </Picker>
            </View>
        )
    

    
}

const styles = StyleSheet.create({
    container:{
        borderColor: "lightgray",
        borderWidth: 0.25,
        width: 300,
        elevation: 10,
        backgroundColor: "white",
        marginBottom: 10
    },
    dropDown:{
        width: 300,
        color: "black",
    },
   
})
