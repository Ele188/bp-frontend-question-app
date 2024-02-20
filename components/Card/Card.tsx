import React from 'react'
import styles from "./styles.module.css"

type CardType =  {
  _id: string;
  date: string;
  questionText: string;
} 
 const Card: React.FC <CardType> = ({
  _id,
  date,
  questionText,
 }) => {
  return (
    <div key={_id} className = {styles.wrapper}>
    <h4>{date}</h4>
    <br/>
    <h3>{questionText}</h3>
    </div>
  );
}

export default Card