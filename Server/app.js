const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors());


//creating route
app.get('/', (req, res) => {
    res.send('hello world!')
})

app.post('/posts/create', (req, res) => {
    res.send('hello world!')
})



const port = 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));