const express = require('express');
const cors = requiere('cors');
const app = express();

app.use(cors());

app.use('/login', (req,res) => {
    res.send({
        token: 'test123'
    });
});


app.listen(8080, () => console.log('Api Running'));