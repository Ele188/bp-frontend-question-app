import { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Card from "../components/Card/Card";
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link"



const Home = () => {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);

  const checkUserToken = () => {
    const token = cookie.get("jwt_token");

    if (!token) {
      router.push("/login");
    }
  };

const fetchQuestions = async ()=> {
  const headers = {
    authorization: cookie.get("jwt_token"),
  };
try{
  const response = await axios.get("http://localhost:3001/questions/", {
    headers:headers,
  });
  console.log(response.data.questions)
  setQuestions(response.data.questions);
 }catch (err){
  console.log(err);
  router.push("/login");
 }
};

  useEffect(() => {
    checkUserToken();
    fetchQuestions();

  }, []); 

  return ( 
  <>
  <Header />

   <Link href="/addQuestion">
    <button className={styles.addQuestionBtn}> Add question </button>
   </Link>

  <div className={styles.cards}>
    {questions.map((question) => {
      return (
      
      <Card
          key={question._id}
          _id={question._id}
          date={question.date}
          questionText={question.questionText}     
          />
  
      );
})}
</div>
  <Footer />
  </>
  );
};

export default Home;