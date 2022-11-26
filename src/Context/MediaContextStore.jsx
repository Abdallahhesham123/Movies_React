import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export let MediaContext=createContext(0)



const MediaContextProvider = (props) => {

    const [TrendingMovies, setTrendingMovies] = useState([]);
    let getTrendingItems = async (item,callBack) => {

                const API_key = "api_key=c9a1298150cd4eec6156dbe3922018f2";
                const Base_URL = "https://api.themoviedb.org/3";
                const API_URL = Base_URL + `/trending/${item}/day?` + API_key;

                
      let { data } = await axios.get(API_URL);
      callBack(data.results);
      // console.log(data.results);
    };
  
    useEffect(() => {
        getTrendingItems("all",setTrendingMovies)
        // getTrendingItems("moive",setTrendingMovies)
        // getTrendingItems("tv",setTrendingMovies)
        
    }, []);
  

  return<MediaContext.Provider value={{TrendingMovies}}>

{props.children}

  </MediaContext.Provider>
}

export default MediaContextProvider