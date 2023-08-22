import React from "react"











import Slider from "react-slick"

import Header from "./Header"

import "./Home.css"



/* const ItemsData = [
    {
        id:1,
        ItemName: "Shirt",
        imageUrl:"https://i.ibb.co/Nrky8y6/download-2.jpg",
        rating:"4",
    },
    {
        id:2,
        ItemName: "Shirt",
        imageUrl:"https://i.ibb.co/B2KvzyD/download-3.jpg",
        rating:"3",
    },
    {
        id:3,
        ItemName: "Tshirt",
        imageUrl:"https://i.ibb.co/st8fnJQ/download-6.jpg",
        rating:"4",
    },
    {
        id:4,
        ItemName: "Tshirt",
        imageUrl:"https://i.ibb.co/jWNxL2Q/download-7.jpg",
        rating:"3",
    },
] */



const offerItems = [
    {
        id:1,
        imageUrl:"https://i.ibb.co/YyRyq9V/images-4.jpg"
    },
    {
        id:2,
        imageUrl:"https://i.ibb.co/GTkgyvG/images-5.jpg"
    },
    {
        id:3,
        imageUrl:"https://i.ibb.co/wSSzK8w/images-6.jpg"
    }
]


const Home = () =>{
    const settings = {
        dots: true,
        slidesToShow:1,
        slidesToScroll:1,
    }
    return (
    <div className="home-container">
        <Header/>
        <Slider {...settings}>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
        </Slider>
    </div>
)
    }
export default Home