import React from 'react'
import { useParams,Link } from 'react-router-dom'
import upvote from '../../assets/sort-up-solid.svg'
import downvote from '../../assets/sort-down-solid.svg'
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { useSelector } from 'react-redux'

const QuestionsDetails = () => {

    const { _id } = useParams()
    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(_id)
    // var questionsList = [{
    //     _id: '1',
    //     upVotes: 3,
    //     downVotes: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "what is a function?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "nodejs", "R", "reactjs"],
    //     userPosted: "ram",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'singh',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }, {
    //     _id: '2',
    //     upVotes: 4,
    //     downVotes: 2,
    //     noOfAnswers: 8,
    //     questionTitle: "what is a array?",
    //     questionBody: "It was to be",
    //     questionTags: ["html", "c", "c++", "nodejs"],
    //     userPosted: "tushar",
    //     userId: 1,
    //     askedOn: "jan 6",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'verma',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }, {
    //     _id: '3',
    //     upVotes: 1,
    //     downVotes: 0,
    //     noOfAnswers: 6,
    //     questionTitle: "what is a loop?",
    //     questionBody: "It were to be",
    //     questionTags: ["mern", "java", "mongoose", "express", "nextjs"],
    //     userPosted: "ravi",
    //     userId: 1,
    //     askedOn: "jan 17",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: 'srivastava',
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]

    return (
        <div className="question-details-page">
            {
                questionsList?.data === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questionsList?.data.filter(question => question._id === _id).map(question => (
                                <div key={question._id}>
                                    {console.log(question)}
                                    <section className="question-details-container">
                                        <h1>{question.questionTitle}</h1>
                                        <div className="question-details-container-2">
                                            <div className="question-votes">
                                                <img src={upvote} alt="upvote" width='18' className='votes-icon'/>
                                                <p>{question.upVotes - question.downVotes}</p>
                                                <img src={downvote} alt="downvote" width='18' className='votes-icon' />
                                            </div>
                                            <div style={{ width: "100%" }}>
                                                <p className="question-body">{question.questionBody}</p>
                                                <div className="question-details-tags">
                                                    {
                                                        question.questionTags.map((tag) => (
                                                       <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question-actions-user">
                                                    <div>
                                                        <button type='button'>Share</button>
                                                        <button type='button'>Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`} className="user-link" style={{color:'#0086d8'}}>
                                                            <Avatar backgroundColor="orange" px='8px' py='5px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswer key={question._id} question={question}/>
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                     <h3>Your Answer</h3>
                                     <form>
                                        <textarea name="" id="" cols="30" rows="10"></textarea><br/>
                                        <input type="Submit" className="post-ans-btn" value='Post Your Answer' />
                                     </form>
                                     <p>
                                        Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or
                                        <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}> ask your own question.</Link>
                                     </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionsDetails
