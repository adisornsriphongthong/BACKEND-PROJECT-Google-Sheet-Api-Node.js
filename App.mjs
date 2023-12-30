import axios from "axios";
import express from 'express'
const app = express()
const port = 3000

const label1 = '4';
const label2 = '5';
const label3 = '6';

const data = {
    label1,
    label2,
    label3
};

const getData = async() => {
    let currentData = {}
    const getData = await axios.get('https://sheet.best/api/sheets/d4769a3d-9584-4de8-9435-97d72faa7362', data)
        .then((res) => {
            currentData = res.data[0]
        })
    console.log(currentData)

    app.get('/', (req, res) => {
        res.json(currentData)
    })
};

getData()

app.listen(port, (err) => {
    if(err) throw err
    console.log('The server is running on port ' + port)
})
