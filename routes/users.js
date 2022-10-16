const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

let users = [

]

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    console.log("POST route reached");
    // console.log(req.body);
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} has been added to the database!`);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the ${id} is removed!`);
});

module.exports = router;