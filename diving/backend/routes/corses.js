const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const CoursesData = require("../models/courses").Courses;

router.get("/", (req, res) => {

  CoursesData.find().then(data => {
res.json(data)
    res.render("index", { Corses: data });
  });
});


router.get("/new", (req, res) => {
  res.render("new");
});
router.post("/", (req, res) => {
  var newCourse = req.body;
  var course = new CoursesData(newCourse);
  course
    .save()
    .then(data => {
 
      res.redirect("/corses");
    })
    .catch(err => {
      console.log("error");
    });
});

//get single course
router.get("/:id", (req, res) => {
    CoursesData.findById(req.params.id)
.then(data=>{
    res.render('show',{course:data})
})


});

router.get("/usershow", (req, res) => {
    CoursesData.find()
.then(data=>{
  
    res.render('usershow',{Corses:data})
})


});
//delet 
router.delete("/:id", (req, res) => {
    CoursesData.findByIdAndDelete(req.params.id)
    .then(data=>{
       
        res.redirect("/corses");
    })
  
})


//update 
router.get('/edit/:id',(req,res)=>{
    CoursesData.findById(req.params.id)
    .then(data => {
       res.json(data)
        res.render('edit', {course : data})
    }).catch(err => console.log(err))
    
})
router.put('/edit/:id',(req,res)=>{
    var updateCourse = req.body
    CoursesData.findByIdAndUpdate(req.params.id,updateCourse )
    .then(data=>{
        
        res.redirect("/corses");
    })
})

module.exports = router;
