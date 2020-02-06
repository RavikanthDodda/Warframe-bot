const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;


app.use("/items", require('./routes/items'));




app.listen(PORT, () => {
    console.log('we are live');
})
