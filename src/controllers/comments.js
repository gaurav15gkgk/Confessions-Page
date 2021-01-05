const { Users, Posts , Comments} = require('../db/model')

async function CreateNewComment(title, body, userId, postId ){
    const comment = await Comments.create({
        title,
        body,
        userId,
        postId
    })

    return comment
}

async function findAllComments(PostId){
    const comments = await Comments.findAll({
        where:{
            postId: PostId
        }
    })

    return comments
}

module.exports = {
    CreateNewComment,
    findAllComments
}