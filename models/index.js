const User = require('./User')
const Blogs = require('./Blogs')
const Comments = require('./Comments')


Blogs.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'Cascade'
})

User.hasMany( Blogs, {
    foreignKey: 'user_id'
})

User.hasMany(Comments, {
    foreignKey: 'user_id',
})

Blogs.hasMany(Comments, {
    foreignKey: 'blog_id'
})

Comments.belongsTo(User, {
    foreignKey: 'user_id'
})

Comments.belongsTo(Blogs, {
    foreignKey: 'blog_id'
})

module.exports = {
    User,
    Blogs,
    Comments

}