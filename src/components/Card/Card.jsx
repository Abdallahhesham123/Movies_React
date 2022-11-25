import React from 'react'
import styled from "./Card.module.scss"
function Card({cardInfo}) {

    const Image_url = "https://image.tmdb.org/t/p/w500";


  return (


<div className={`${styled.card}`} >
                        <div className={`${styled.face} ${styled.face1}`}>
                            
                            <div className="content">
                                <h2>{cardInfo.title}</h2>
                                    <div className={`${styled.title} row jusstify-content-around`}>
                                    

                                            <h6 style={{"font-size":"16px","color":"#0075ff"}}>{cardInfo.original_title ? `${cardInfo.original_title.split(" ").splice(0, 3).join(" ") }` : "Sorry, There is no title"}</h6>

                                       
                                        
                                            {
              cardInfo.vote_average ?   <span className={(cardInfo.vote_average >= 8) ? `${styled.green}`: (cardInfo.vote_average >= 7) ?`${styled.orange}`: `${styled.red}`}>{cardInfo.vote_average}</span>: <span className={`${styled.empty}`}>{cardInfo.vote_average}</span>

                                            }
                                                     
                                     
                                    </div>
         
                                <button id={cardInfo.id}>READ MORE</button>    
                            </div>
                        </div>
                        <div className={`${styled.face} ${styled.face2}`}>
                        <img src= {
                          cardInfo.poster_path
                            ? Image_url + cardInfo.poster_path
                            : ""
                        } alt="" srcset=""/>
                        </div>
                    </div>










   

  )
}

export default Card