const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const data = require('./db.json')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/days', (request, response) => {
    response.json(data.days);
})

app.get('/days/:day', (request, response) => {
    const day = request.params.day
    if (day >= 0 && day <= 5) {
        response.json(data.days[day])
    }
    else {
        response.status(400).end()
    }
})

app.put('/days/:day', (request, response) => {
    const day = request.params.day
    if (day >= 0 && day <= 5) {
        data.days[day].enroll = request.body.enroll
        response.json(data.days)
    }
    else {
        response.status(400).end()
    }
})

const PORT = process.env.PORT || 9000;

const server = app.listen(PORT, () => {
  console.log('listening on port %s...', server.address().port);
});