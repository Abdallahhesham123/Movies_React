import React, { useEffect } from "react";

import About from "../About/About";
import Movies from "../Movies/Movies";


function Home() {
//   useEffect(() => {
// document.title="Home"
//   }, [])
  

  return (
    <>


    <Movies/>

   <About/>


 
    </>
  );
}

export default Home;
