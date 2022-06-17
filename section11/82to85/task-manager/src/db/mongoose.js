//83
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
//     useNewUrlParser:true,
//     useCreateIndex:true
// });

// const User = mongoose.model("User",{
//     name:{
//         type:String
//     },
//     age:{
//         type:Number 
//     }
// })

// const me= new User({
//     name:"Abhijeet",
//     age:25
// });
// me.save().then(()=>{
//    console.log(me);
// }).catch((e)=>{
//    console.log("Error!"+e);
// })


//84
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
//     useNewUrlParser:true,
//     useCreateIndex:true
// })

// const Task = mongoose.model("task",{
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// });

// const addTask = new Task({
//     description:"purchase bike",
//     completed:true
// });

// addTask.save().then(()=>{
//     console.log(addTask);
// }).catch((e)=>{
//     console.log("Error!"+e);
// })


//85
const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",{
    useNewUrlParser:true,
    useCreateIndex:true
});

const User = mongoose.model("User",{
    name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Error")
            }
        }
    },
    age:{
        type:Number,
        default:0,
        validate(value){
            if(value<0){
                throw new Error("age error")
            }
        }
    }
})

const me= new User({
    name:"Abhijeet     ",
    Email:"ABHI@GMAIL.COM          "
});
me.save().then(()=>{
   console.log(me);
}).catch((e)=>{
   console.log("Error!"+e);
})
