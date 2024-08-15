const express = require('express');
const bodyParser = require('body-parser');

const bookRoute = require('./routes/book_route');


const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('This is the root');
})


app.use('/books', bookRoute);



app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
