import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
const API_key = "api_key=c9a1298150cd4eec6156dbe3922018f2";
const Base_URL = "https://api.themoviedb.org/3";
const API_URL = Base_URL + "/trending/all/week?" + API_key;

function Home() {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  let getTrendingMovies = async () => {
    let { data } = await axios.get(API_URL);
    setTrendingMovies(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-between flex-wrap py-5" >
        <div className="col-md-4">
          <div className="cap">
            <hr className="w-25" />
            <h2>Trending </h2>
            <h5>Movies</h5>
            <h6>to Watch Now</h6>
            <p className="text-muted">Lorem ipsum, dolor sit amet consectetur</p>
            <hr />
          </div>
        </div>

       
          {TrendingMovies.map((ele, index) => (
             <div className="col-md-2">
            <Card cardInfo={ele} key={index} />
            </div>
          ))}
        

        </div>

      </div>
    </>
  );
}

export default Home;
