const express=require('express');
const mongoose=require('mongoose');
const bodyperser=require('body-parser');

const cors=require("cors");
const dburl="mongodb+srv://admin:admin@cluster0.vtktc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//create express app
const app=express();

//parse req of x-www-form-urlencoded
app.use(bodyperser.urlencoded({
    extended : true
}))

//content type
app.use(bodyperser.json())

//cross platform api working
app.use(cors());



//connect to the database
mongoose.connect(dburl , { useUnifiedTopology: true , useNewUrlParser: true }).then(()=>{
    console.log("connected")
}).catch((res)=>{
    console.log(res)
    process.exit()
});



const UsersSchema= mongoose.Schema({
    "name": "",
    "email": "",
    "password":"",
    "role":""
}, {
    timestamps:true
});
const User= mongoose.model("User",UsersSchema)

app.post('/user',(req,res)=>{
    const user=new User({
        name: req.body.name,
        email: req.body.email,
        password:req.body.password,
        role:req.body.role
    })
    user.save().then(data=>{
        res.send(data)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});

//get all data from student table --------------------------------
app.get('/users',(req,res)=>{
    User.find().then(users=>{
        res.send(users)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});









const PORT = process.env.PORT||4000;
//listen to req
app.listen(PORT,()=>{
    console.log(`app server listen the port ${PORT}`);
});