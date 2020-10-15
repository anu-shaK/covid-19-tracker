import React from 'react'
import { View, TextInput , StyleSheet} from 'react-native'

const SearchBar = ({placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} placeholder={placeholder}></TextInput>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        height: 50,
        width: "90%",
        borderRadius: 50,
        backgroundColor: "white",
        marginBottom: 10,
        elevation: 10
    },
    text:{
        padding: 15,
        textAlign: "left"
    }
});