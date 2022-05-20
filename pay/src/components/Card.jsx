import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <div className={props.date == "17-sep-2020" ? "body1" : "body"}>
           <div className="head">
               <p>{props.date}</p>
               <img className="ima" src={props.logo} alt="" />
           </div>
           <div className="side">
                <h5 className="case">{props.title}</h5>
                <h1>{props.compTitle}</h1>
                <h1>{props.pay}</h1>
               <div className="foot">
               <h3>{props.mode}</h3> 
               <img className="ima" src="https://www.popsci.com/app/themes/empire/resources/assets/images/right-arrow.svg" alt="" />
               </div>

           </div>
    </div>
  )
}

export default Card