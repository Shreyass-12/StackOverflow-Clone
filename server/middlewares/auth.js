import jwt from 'jsonwebtoken'

const auth = (req,res,next) => {
    try {
        const token = req.data.Authorization.split(' ')[1]   // first string bracket represents bearer and 1 represents token
        
        let decodeData = jwt.verify(token, 'test')
        req.userId = decodeData?.id
        
        next()     //next is AskQuestion in routes Questions.js that will execute
    } catch (error) {
        console.log(error)
    }
}
export default auth;