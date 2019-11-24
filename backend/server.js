const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')
const methodOverride = require('method-override') 



app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use('/trips' , require('./routes/trip'))


mongoose.connect('mongodb://localhost/', {useNewUrlParser : true , useUnifiedTopology: true } )
.then(()=> console.log('Mongodb is running'),(err) => console.log(err) );

// listen for requests
app.listen(3001, () => {
   console.log("Server is listening on port 3001");
}); 