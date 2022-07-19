const Blogs = require('../models/Blogs')

const blogData = [
    {
        blog_title: "Why is MVC so important?",
        username: "nadybee",
        user_id: 1,
        date: '07/18/2022',
        content: 'Lorem ipsum dolor sit amet. Et iure totam sit voluptatum autem non maxime nobis eum modi totam ut earum sint. Sit internos sunt ut corporis inventore a dolorem eius quo aperiam nulla aut veritatis doloribus et quos natus ad voluptatem enim.'
    },
    {
        blog_title: " How to get a job after bootcamp",
        username: "littlealta",
        user_id: 2,
        date: '07/16/2022',
        content: 'ut voluptatem Quis quo modi quaerat aut voluptates maxime non excepturi ullam nemo eveniet autem fugiat qui quia quam. Non dolore voluptatem et aspernatur quia ut tempora consequuntur in adipisci pariatur eos deleniti facilis. Et iste voluptatem a vitae voluptas ea nemo iusto hic sunt nihil est velit nobis ea recusandae autem?'

    },
    {
        blog_title: "Best ways to manage state",
        username: "pfairbourne",
        user_id: 3,
        date: '06/10/2022',
        content: 'Nam quasi possimus aut omnis praesentium in saepe quia eos quia dolores. Quo quia illum ut maxime ipsam est omnis temporibus aut tenetur optio. Vel suscipit quam ex dolorum ipsum ut culpa officia et laboriosam quaerat non earum dolore.'
    },

]

const seedBlogs = () =>Blogs.bulkCreate(blogData);

module.exports = seedBlogs;