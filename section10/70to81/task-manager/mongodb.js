// 70 to 75
// const mongodb=require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     // console.log("connected successfully!");
//     const db = client.db(databaseName);

//     db.collection("users").insertOne({
//         name:"abhijeet",
//         age:25
//     })
// })


//76
// const mongodb=require("mongodb");
// const MongoClient = mongodb.MongoClient;

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     // console.log("connected successfully!");
//     // const db = client.db(databaseName);

//     // db.collection("users").insertOne({
//     //     name:"abhijeet",
//     //     age:25
//     // })

//     // const db=client.db(databaseName);
//     // db.collection("users").insertOne({
//     //     name:"abhi",
//     //     age:"27"
//     // },(error,result)=>{
//     //     if(error){
//     //         return console.log("unable to insert documents");
//     //     }
//     //     console.log(result.acknowledged);//in place of ops we can use acknowledged
//     // })
//     // const db=client.db(databaseName);
//     // db.collection("users").insertMany([{
//     //     name:"jeet",
//     //     age:25
//     // },{
//     //     name:"shek",
//     //     age:19
//     // }],(error,result)=>{
//     //     if(error){
//     //         console.log("unable to insert data");
//     //     }
//     //     console.log(result.acknowledged);
//     // })
//     const db=client.db(databaseName);
//     db.collection("tasks").insertMany([{
//         name:"gym",
//         completed:true
//     },{
//         name:"washing bike",
//         completed:false
//     },{
//         name:"laptop work",
//         completed:true
//     }],(error,result)=>{
//         if(error){
//             return console.log("unable to insert data in the database");
//         }
//         console.log(result.acknowledged);
//     })
// })

//77
// // const mongodb=require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const objectID = mongodb.objectID;
// const {MongoClient,ObjectID} = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// const id = new ObjectID();
// // console.log(id);
// // console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     const db=client.db(databaseName);
//     // db.collection("tasks").insertMany([{
//     //     name:"gym",
//     //     completed:true
//     // },{
//     //     name:"washing bike",
//     //     completed:false
//     // },{
//     //     name:"laptop work",
//     //     completed:true
//     // }],(error,result)=>{
//     //     if(error){
//     //         return console.log("unable to insert data in the database");
//     //     }
//     //     console.log(result.acknowledged);
//     // })
//     db.collection("users").insertOne({
//         _id:id,
//         name:"vikram",
//         age:45
//     },(error,result)=>{
//         if(error){
//             console.log("unable to insert result");
//         }
//         console.log(result.acknowledged);
//     })
// })


//78
// const {MongoClient,ObjectID} = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// const id = new ObjectID();

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     const db=client.db(databaseName);
    
//     // db.collection("users").findOne({name:"jeet"},(err,result)=>{
//     //     console.log(result);
//     // })

//     // db.collection("users").findOne({_id:new ObjectID("62ac27dc771b8303543fb223")},(err,result)=>{
//     //     console.log(result);
//     // })
     
//     // db.collection("users").find({name:"jeet"}).toArray((error,result)=>{
//     //     if(error){
//     //       return  console.log(error);
//     //     }
//     //       console.log(result);
//     // })
//     // db.collection("users").find({name:"jeet"}).count((err,result)=>{
//     //       console.log(result);
//     // })

//     // db.collection("tasks").findOne({_id:new ObjectID("62ac2a8753eaba255741bd4b")},(err,result)=>{
//     //     console.log(result);
//     // })
//     db.collection("tasks").find({completed:false}).toArray((err,result)=>{
//         console.log(result);
//     })
    
// })


//80
// const {MongoClient,ObjectID} = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// const id = new ObjectID();

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     const db=client.db(databaseName);
    
//     // db.collection("users").updateOne({
//     //     _id:new ObjectID("62ac27dc771b8303543fb223")
//     // },{
//     //     $set:{
//     //         name:"ram"
//     //     }
//     // }).then((result)=>{
//     //     console.log(result);
//     // }).catch((error)=>{
//     //     console.log(error);
//     // })
    
// //    const updateUsers = db.collection("users").updateOne({
// //         _id:new ObjectID("62ac27dc771b8303543fb223")
// //     },{
// //         $set:{
// //             name:"Sham"
// //         }
// //     })
// //     updateUsers.then((result)=>{
// //         console.log(result);
// //     }).catch((error)=>{
// //         console.log(error);
// //     })

// // const updateUsers = db.collection("users").updateOne({
// //     _id:new ObjectID("62ac27dc771b8303543fb223")
// // },{
// //     $inc:{
// //         age:10
// //     }
// // })
// // updateUsers.then((result)=>{
// //     console.log(result);
// // }).catch((error)=>{
// //     console.log(error);
// // })
// const updateUsers = db.collection("tasks").updateMany({
//     completed:true
// },{
//     $set:{completed:false}
// })
// updateUsers.then((result)=>{
//     console.log(result.modifiedCount);
// }).catch((error)=>{
//     console.log(error);
// })
// })


//81
const {MongoClient,ObjectID} = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName="task-manager";

const id = new ObjectID();

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("unable to connect database!");
    }
    const db=client.db(databaseName);
    
// const deleteUsers = db.collection("tasks").deleteMany({
//     completed:false
// })

// deleteUsers.then((result)=>{
//     console.log(result.deletedCount);
// }).catch((error)=>{
//     console.log(error);
// })
const deleteUsers = db.collection("users").deleteOne({
    age:19
})

deleteUsers.then((result)=>{
    console.log(result.deletedCount);
}).catch((error)=>{
    console.log(error);
})
})