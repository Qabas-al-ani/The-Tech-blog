const { Comment } = require('../models');

const commentData = [{
        comment_text: "That was helpful Thank you!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "That was really helpful!",
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: "Thank you for your time to add all that!",
        user_id: 2,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;