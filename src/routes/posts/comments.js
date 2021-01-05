const { Router } = require('express')
const {
    CreateNewComment,
    findAllComments
} = require('../../controllers/comments')

const commentsRoute = Router()

commentsRoute.get('/', async(req, res) =>{
    postId = (req.query.postId)
    const comments = await findAllComments(postId)
    res.status(200).send(comments)
})



commentsRoute.post('/', async(req, res) =>{
    const {
        title,
        body,
        userId,
        postId
    } = req.body

    if((!title)||(!body)||(!userId)||(!postId)){
        res.status(400).send({
            error: "Comment cant be empty"
        })

    }

    const comment = await CreateNewComment(title, body, userId, postId)
    res.status(201).send(comment)
})

module.exports ={
    commentsRoute
}