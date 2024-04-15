import {  useLoaderData, } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";


const News = () => {
    const [aNews, setANews] =useState([])

    useEffect(() => {
        fetch('news.json')
        .then(res => res.json())
        .then(data => setANews(data))
    },[])
    // const news = useLoaderData()
    const { image_url, title, author, details, } = aNews
    return (
        <div>
            <h3>
                <Header></Header>
                <Navbar></Navbar>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="col-span-3">
                        <h2 className="text-3xl">Dragon News</h2>
                        <div className="card card-compact bg-base-100 border  space-y-4 p-6 mb-8">

                            <p className='text-2xl font-semibold'>{title}</p>

                            <figure><img src={image_url} alt="Shoes" /></figure>
                            <div className="card-body">

                                <p className='text-base'>{details}</p>

                            </div>
                        </div>

                    </div>

                    <div>
                        <RightSideNav></RightSideNav>
                    </div>

                </div>

            </h3>
        </div>
    );
};

export default News;