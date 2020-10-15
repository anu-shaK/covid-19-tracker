import axios from "axios"

const url = "https://api.covid19api.com/summary"
const URL = "https://api.covid19api.com"

export const getData = async() => {
    try {
        const {data : {Countries}} = await axios.get(url);
        return Countries;
    } catch (error) {
        console.log("Error", error)
    }
}

export const getCountries = async() => {
    try {
        const {data}= await axios.get(`${URL}/countries`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

