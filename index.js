const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', require('./routes/users'));

app.get('/', (req,res) =>  {
    res.send("Hello from Homepage")
});

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));