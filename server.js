const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image : 'https://placeimg.com/64/64/1',
            name: 'hwang heewon',
            birthday: 970414,
            gender: 'female',
            job: 'student'
        },
        {
            id: 2,
            image : 'https://placeimg.com/64/64/2',
            name: 'hwang youjin',
            birthday: 980317,
            gender: 'female',
            job: 'student'
        },
        {
            id: 3,
            image : 'https://placeimg.com/64/64/3',
            name: 'lee jihyun',
            birthday: 671120,
            gender: 'female',
            job: 'salary women'
        }
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`))