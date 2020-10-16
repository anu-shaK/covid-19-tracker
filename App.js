import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import  Constants from 'expo-constants';

import DropDown from "./components/dropDown"
import Stats from "./components/stats"
import Totals from "./components/totals"
import {getData} from "./api"

export default function App() {

  const[selectedCountry, setSelectedCountry] = useState("")
  const[countryData, setCountryData] = useState([]);

  const fetchData = async () => {
    try {
      const countryData = await getData();
      setCountryData(countryData);
        } 
    catch (error) 
      {
      console.log(error)
      }
  }

  useEffect(() => {
      let mounted = true;
      if(mounted) {fetchData()}
      return () => mounted = false;
  },[])
  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  }
  return (
    <View style={styles.container}>
      <DropDown onSelectCountry={handleSelectCountry}/>
      <Totals country = {countryData.find((country) => {return country.Country === selectedCountry})}/>
      <Stats country = {countryData.find((country) => {return country.Country === selectedCountry})}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    marginTop: Platform.OS ==="android" ? Constants.statusBarHeight : null
  }
})
