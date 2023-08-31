import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../App";
import Card from "./Card";

const Conference = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = async (search) => {
        const res = await axios.get(`${server}`);
        const { data } = await res.data.content;
        console.log(data);
        if (search.length != 0) {
            let myArr = data.filter((i) =>
                i.title.toLowerCase().includes(search.toLowerCase())
            );
            if (myArr.length != 0) {
                console.log(myArr);
                setData(myArr);
            }
        } else {
            setData(data);
        }
    };
    useEffect(() => {
        handleSearch("");
    }, []);

    return (
        <>
            <div className="h-32 flex flex-row justify-evenly items-center bg-gray-500 font-mono">
                <div
                    className=" font-black text-3xl text-white border-4 p-4 rounded-full
      shadow-md shadow-white"
                >
                    CONFERENCE PAGE
                </div>
                <div className="flex self flex-row justify-end gap-3">
                    <input
                        type="text"
                        placeholder="Search by Title"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                        className=" bg-black text-white border-2 border-black px-5 py-2 outline-none shadow-slate-700 shadow-xl rounded-xl"
                    />
                    <button
                        className=" bg-black text-white border-2 border-black px-5 py-2 rounded-full shadow-slate-700 shadow-xl"
                        onClick={() => handleSearch(search)}
                    >
                        Search
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap content-center flex-col md:flex-row md:justify-evenly gap-3 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                {data.map((i) => (
                    <Card
                        key={i.id}
                        title={i.title}
                        desc={i.description}
                        img={i.banner_image}
                        date={i.date_time}
                        orgname={i.organiser_name}
                        orgicon={i.organiser_icon}
                        venname={i.venue_name}
                        vencity={i.venue_city}
                        vencntry={i.venue_country}
                    />
                ))}
            </div>
        </>
    );
};

export default Conference;
