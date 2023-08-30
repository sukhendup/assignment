import React from 'react'
import { useState,useEffect } from "react"
import axios from "axios"
import { server } from '../App'
import Card from './Card'

const Conference = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
    axios.get(`${server}`)
    .then((res)=>{
        const {data} = res.data.content;
        setData(data)
        console.log(data)
    })
    .catch((e)=>{
        console.log(e)
    })
  },[])
  return (
    <>
    <div className=" h-32 flex justify-center items-center bg-slate-800 ">
      <div className="font-black text-3xl text-white border-4 p-4 rounded-full
      shadow-md shadow-white">: CONFERENCE PAGE :</div>
    </div>
    
    <div className= "flex flex-wrap content-center flex-col md:flex-row md:justify-evenly gap-3 bg-slate-800">
      {data.map((i) => <Card
        key={i.id}
        title ={i.title}
        desc = {i.description}
        img = {i.banner_image}
        date = {i.date_time}
        orgname = {i.organiser_name}
        orgicon = {i.organiser_icon}
        venname = {i.venue_name}
        vencity = {i.venue_city}
        vencntry = {i.venue_country}
      />)
      }
    </div>
    </>
  )
}

export default Conference
