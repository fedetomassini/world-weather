const PORT = 80;
const express = require('express');
const request = require('request');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).send({ status: 'UP, UP, UP, TO THE MOOON! ^^' });
})

app.get('/weather', (request, response) => {
    const city = request.query.city;
    const apiKey = '3d994194a19803fe3ef7b54575b7d110';
    const units = 'metric';
    const lang = request.query.langCode;
    
    const weather = {
        method: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            q: city,
            units: units,
            lang: lang,
            appid: apiKey
        }
    };
    
    axios(weather)
    .then(apiResponse => {
        response.json(apiResponse.data);
    })
    .catch(error => {
        console.log(error);
        response.status(500).send('');
    });
});

// Languages Endpoints \\

app.get('/translations', (req, response) => {
    request('https://api.npoint.io/2c7544407e4a00ec3345', (error, translations_response) =>{
        if(error){
            res.status(404).send({status: '404, not found'});
            return;
        }

        const translationsBody = JSON.parse(translations_response.body)
        response.json(translationsBody);
    });
})

app.get('/translations/english', (req, response) => {
    request('https://api.npoint.io/2c7544407e4a00ec3345/english', (error, translations_response) =>{
        if(error){
            res.status(404).send({status: '404, not found'});
            return;
        }

        const translationsBody = JSON.parse(translations_response.body)
        response.json(translationsBody);
    });
})

app.get('/translations/spanish', (req, response) => {
    request('https://api.npoint.io/2c7544407e4a00ec3345/spanish', (error, translations_response) =>{
        if(error){
            res.status(404).send({status: '404, not found'});
            return;
        }

        const translationsBody = JSON.parse(translations_response.body)
        response.json(translationsBody);
    });
})

app.get('/translations/japanese', (req, response) => {
    request('https://api.npoint.io/2c7544407e4a00ec3345/japanese', (error, translations_response) =>{
        if(error){
            res.status(404).send({status: '404, not found'});
            return;
        }

        const translationsBody = JSON.parse(translations_response.body)
        response.json(translationsBody);
    });
})
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))