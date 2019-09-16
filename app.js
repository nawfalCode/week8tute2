let mongoose = require('mongoose');
let express = require('express');
let app = express()
let url = "mongodb://localhost:27017/week8tute2"
let studentRoute = require('./routers/student')
let schoolRoute = require('./routers/school')
mongoose.connect(url,function(err){
    if (err) throw err;
    console.log("DB Connected Successfully")
})
app.listen(8080)

app.get('/',(req,res)=>{
    res.send('Welcome to week 8')
})

app.use(express.json())

// add student
app.post('/student', studentRoute.addNewStudent)
// get student 
app.get('/student', studentRoute.getAllStudents)


// add schools
app.post('/schools',schoolRoute.addNewSchool)
// get schools
app.get('/schools', schoolRoute.getAllSchools)
app.post('/schools/enroll/:stnId', schoolRoute.enrollStudent)