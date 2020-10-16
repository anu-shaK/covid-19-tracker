import React from 'react'
import Card from "./card"

export default function Stats({country}) {

        return (
            <>
            <Card title="DEATHS" color="tomato" data={country && country.TotalDeaths}/>
            <Card title = "RECOVERED" color="green" data={country && country.TotalRecovered}/>
            <Card title="ACTIVE" color="orange" data={country && country.TotalConfirmed }/>
            <Card title="NEW CASES" color="black" data={country && country.NewConfirmed} />
            </>
        )
    
   
    
}

