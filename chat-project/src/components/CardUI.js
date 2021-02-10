import React from 'react';
import './CardUI.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function CardUI
**/

const CardUI = (props) => {
  return(
    <div className="card">
     {props.children}
    </div>
   )
  }


export default CardUI