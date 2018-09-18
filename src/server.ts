
import express = require('express'); // this version did not work - import * express from 'express'; 

const app = express();

app.get('/', (req, res) => {
    res.json({hello: 'world'});
});

export const server = async () => {
    app.listen(process.env.PORT);
    console.log(`Server started at http://localhost:${process.env.PORT}`);
    console.log(`Press Ctrl+C to quit`);

};






