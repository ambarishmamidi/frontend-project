import React from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
        imageUrl:"https://i.ibb.co/xYWmJkq/images-6.jpg"
    },
    {
        imageUrl:"https://i.ibb.co/prVLygq/images-5.jpg"
    },
    {
        imageUrl:"https://i.ibb.co/xYWmJkq/images-6.jpg"
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
        <Slider {...settings} controls className="slider">
                {offerItems.map(each => 
                    <img src={each.imageUrl} alt="offer" className="slide-images"/>
                    )} 
            
        </Slider>
    </div>
)
    }
export default Home