import React from "react"


import { useState,useEffect } from "react"

import "./Home.css"


const Home = () => {
    const [page,getPageData] = useState("1")
    
    const increasePageCount = prevPage => getPageData(prevPage+1)
    useEffect (() => {
        const getFetchData = async() => {
            const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`
            const options = {
                method: "GET",
            }
            const response = await fetch(url,options)
            const data = await response.json()
            console.log(data)
        }
        getFetchData()
    },[page])
    return (
    <div className="home-container">
        <h1>Welcome</h1>
        <p>get data</p>
        <button type="button" onClick={increasePageCount}>count</button>
        <button type="button">Login</button>
    </div>
)
}
export default Home