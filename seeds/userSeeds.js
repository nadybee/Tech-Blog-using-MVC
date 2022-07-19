const User = require('../models/User')

const userData = [
    {
        username: 'nadybee',
        email: 'nadybee@aol.com',
        password: 'password1'

    },
    {
        username: 'littlealta',
        email: 'littlealta@aol.com',
        password: 'password2'

    },
    {
        username: 'pfairbourne',
        email: 'pfairbourne@aol.com',
        password: 'password3'

    },
]

const seedUsers = () =>User.bulkCreate(userData);

module.exports = seedUsers;