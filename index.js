const express = require('express');
const mongoose = require('mongoose');
const app = express();
const uri = process.env.npm_package_config_uri ;
const bp = require('body-parser')
//JSON manager
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//connect mongoDB
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Database connected'))
.catch(e => console.log(e))

//routes
app.use('/users', require('./router/Users'));

//
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.listen(3000)
