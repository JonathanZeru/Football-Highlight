import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query'

const Content = () => {

    
    const {data, isLoading, isError} = useQuery(["football"],
     ()=>{
        return axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=MTAwNjk1XzE2OTEwMDc3NzlfMGMzNDJmZjI2MmRjYTBhZjU3NmJjZGM3YzNhZTA2ZDQ3OWVkNzllNA`)
        .then((res)=>res.data.response)
     });
     if(isLoading){
      return <h1 class="h-[80vh] flex justify-center items-center">Loading....</h1>
     }
     if(isError){
      return <h1 class="h-[80vh] flex justify-center items-center">Error loading</h1>
     }
  return (
    <div class="flex flex-wrap justify-center gap-2 cursor-pointer">
      {data.map((item)=>{
        return <div key={item.title} onClick={()=>{
          window.open(item.matchviewUrl)
         
        }}>
          
         <div>
            <h4>{item.title}</h4>
            </div>
          <div>
            <img
            src={item.thumbnail}
            alt="#"
            width={400}
            height={400}
            />
          </div>
        </div>
      })}
    </div>
  )
}

export default Content