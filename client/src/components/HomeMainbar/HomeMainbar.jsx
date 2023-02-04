import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation,useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {
  const location = useLocation()
const user = 1
const navigate = useNavigate()

const questionsList = useSelector(state => state.questionsReducer)
console.log(questionsList)

  // var questionsList = [{
  //   _id: '1',
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers: 2,
  //   questionTitle: "what is a function?",
  //   questionBody: "It meant to be", 
  //   questionTags: ["java", "nodejs","R", "reactjs"],
  //   userPosted: "ram",
  //   userId:1,
  //   askedOn: "jan 1",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'singh',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  // }, {
  //   _id: '2',
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers: 8,
  //   questionTitle: "what is a array?",
  //   questionBody: "It was to be", 
  //   questionTags: ["html","c","c++", "nodejs"],
  //   userPosted: "tushar",
  //   userId:1,
  //   askedOn: "jan 6",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'verma',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  // },{
  //   _id: '3',
  //   upVotes: 3,
  //   downVotes:2,
  //   noOfAnswers: 6,
  //   questionTitle: "what is a loop?",
  //   questionBody: "It were to be", 
  //   questionTags: ["mern", "java","mongoose", "express","nextjs"],
  //   userPosted: "ravi",
  //   userId:1,
  //   askedOn: "jan 17",
  //   answer:[{
  //     answerBody:"Answer",
  //     userAnswered:'srivastava',
  //     answeredOn:"jan 2",
  //     userId:2,
  //   }]
  //  }]



    const checkAuth=()=>{
      if(user === null)
      {
        alert("login or signup to ask a question")
        navigate('/Auth')
      }
      else{
        navigate('/AskQuestion')
      }
    }


return (
  <div className='main-bar'>
    <div className='main-bar-header'>
      {
        location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
      }
      <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
    </div>
    <div>
      {
        questionsList?.data === null ?
          <h1>Loading...</h1> :
          <>
            <p>{questionsList?.data.length} questions</p>
            <QuestionList questionsList={questionsList?.data} />

          </>
      }
    </div>
  </div>
)
}

export default HomeMainbar
