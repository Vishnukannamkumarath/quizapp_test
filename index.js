const express=require('express');
const app=express();
const cors=require('cors');
const {MongoClient}=require('mongodb');
let db='';

async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://vishnu:hello123@cluster0.dzpptwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    await client.connect();
    db = client.db('test');
   ;
 }
app.use(cors());
app.use(express.json());
app.post('/signup',async function(req,res){
    let output=await db.collection('first').insertOne(req.body)
    console.log(req.body);
   
});
app.get('/display',async function(req,res){
    let output=await db.collection('first').find({}).toArray();
    res.json(output)
});
app.listen(5002,function(){
    console.log('running at port 5002');
    mongoConnect();
    
});
