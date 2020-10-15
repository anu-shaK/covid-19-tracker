import axios from "axios"

const url = "https://api.covid19api.com/summary"

export const getData = async() => {
    try {
        const {data : {Countries}} = await axios.get(url);
        return Countries;
    } catch (error) {
        console.log("Error", error)
    }
}
