import express from'express'
import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'

const router = express.Router();
router.post('/Ask',auth, AskQuestion)    //auth here refers to permission
router.get('/get',getAllQuestions)       // is a user has verified token he can getallquestions
router.delete('/delete/:id',auth, deleteQuestion);         //auth here refers to permission
router.patch('/vote/:_id',auth,voteQuestion)               //auth here refers to permission

export default router