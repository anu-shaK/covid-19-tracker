import React from 'react';
import { StyleSheet, View, ScrollView,Text, Platform } from 'react-native';
import Constants from "expo-constants"

import Stats from "./components/stats"
import Totals from "./components/totals"
import SearchBar from "./components/searchBar"

export default function App() {
  return (
    <View style = {styles.container}>
      <SearchBar placeholder="Search by country..."/>
      <Totals/>
      <Stats/>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : null,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:"center",
  },
  
});
