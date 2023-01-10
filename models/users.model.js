const { v4: uuidv4 } = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "latiful",
        email: "latiful@gmail.com"
    },
    {
        id: uuidv4(),
        username: "kabir",
        email: "kabir@gmail.com"
    }
];
module.exports = users;