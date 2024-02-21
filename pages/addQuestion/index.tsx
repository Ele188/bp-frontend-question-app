import React, { useState } from 'react';
import cookie from "js-cookie";
import Header from '../../components/Header/Header';
import styles from "./styles.module.css";
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

const AddQuestion = () => {
  const [date, setDate] = useState<string>("");
  const [questionText, setQuestionText] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string>("");

  const addQuestion = async () => {

      if (!date || !questionText){
        setErrorMessage("Pleace fill all the inputs")
        return;
    };

    const headers = {
      authorization: cookie.get("jwt_token"),
    };

    const question = {
      date,
      questionText,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/question", 
        question, 
        { headers }
      );
      console.log(response);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.form}>
        <input 
          placeholder="date" 
          value={date}  
          onChange={(e) => setDate(e.target.value)} 
        />

        <input 
          placeholder="questionText" 
          value={questionText}  
          onChange={(e)=> setQuestionText(e.target.value)}
        />

        <button onClick={addQuestion}>Add question</button>

        <h4 className={styles.errorMessage}>{errorMessage}</h4>
      </div>

    </div>
  );
};


export default AddQuestion;