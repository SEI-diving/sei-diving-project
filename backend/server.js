const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv/config");
const Profile = require('./model/Profiles')
var cors = require('cors')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors())
mongoose.connect(
    process.env.DEV_DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongoDB");
    }
  );
mongoose.set('useCreateIndex', true)


  app.get('/Profile/:id', async(req,res)=>{
      //Profile.findById(req.params.id)
      try {
          var result = await Profile.findById(req.params.id);
          res.send({result});
      } catch (error) {
          res.send({error})
      }
    })

    app.get('/Profile', async(req,res)=>{
        //Profile.findById(req.params.id)
        try {
            var result = await Profile.find();
            res.send({result});
        } catch (error) {
            res.send({error})
        }
      })

    app.post('/Profile', async(req,res)=>{
        //Profile.findById(req.params.id)
        let profile = new Profile({
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio,
          });
          
        try {
            var data = await profile.save()
            res.send({data})
        } catch (error) {
            res.send({error})
        }
          
          
      })

  

  app.listen(3500, () => console.log("server running"));