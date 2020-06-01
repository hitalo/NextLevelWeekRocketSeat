import express from 'express';


const app = express();

app.get('/users', (req, res) => {
    console.log("listagem de usuarios");
    res.json([
        'Diego',
        'Cleiton',
        'Hitalo',
        'Daniel'
    ]);
});

app.listen(3333);