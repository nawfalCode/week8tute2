let School = require('../models/School')
let Student = require('../models/Student')

module.exports ={
    addNewSchool: function(req,res){
        School.create(req.body, function(err){
            if(err) {
                res.status(500).json(err)
                return;
            }
            res.status(201).json({
                msg: "New school added succesfully"
            })
        })
    },

    getAllSchools: function(req,res){
        School.find().populate('students').exec(function(err, data){

            res.status(200).json(data)
        })
    },
    enrollStudent:function(req,res){
        let studentId=req.params.stnId;
        let schoolId=req.body.schId;

        Student.findById(studentId).exec(function(err,student){
            School.findById(schoolId).exec(function(err,school){
                school.students.push(student);
                school.save(function(err){
                        res.json({msg:'Enrolled'});
                })
            })
        })
        
    }
}