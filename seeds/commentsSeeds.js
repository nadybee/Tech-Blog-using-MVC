const Comments = require('../models/Comments')

const commentData = [
    {
       content: "thanks for the post!",
        username: "nadybee",
        date: '07/18/2022',
        blog_id: 1,
        user_id: 1,  
    },
    {
        content: "Good point!!",
         username: "littlealta",
         date: '07/22/2022',
         blog_id: 2,
         user_id: 2,  
     },
     {
        content: "What else did you learn?",
         username: "littlealta",
         date: '07/22/2022',
         blog_id: 1,
         user_id: 2,  
     },

     {
        content: "great!",
         username: "pfairbourne",
         date: '07/22/2022',
         blog_id: 3,
         user_id: 3,  
     },
     {
        content: "great!",
         username: "pfairbourne",
         date: '07/22/2022',
         blog_id: 2,
         user_id: 3,  
     },

]

const seedComments = () =>Comments.bulkCreate(commentData);

module.exports = seedComments;