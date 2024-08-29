const express = require('express')
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express()
const url = 'mongodb://0.0.0.0:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';
client.connect().then(da=>{
  console.log(da);
}).catch(err=>{
  console.log(err);
})



app.use(cors())
app.use(express.json())
app.listen(3001, () => {
  console.log("Server is running")
})

app.get('/getData',async (req,res)=>{
  const db = client.db('BlogVista');
  const collection = db.collection('Blogg');
  let data = await collection.find({}).toArray();
  res.send(data);
})


app.post('/insertData', async (req,res)=>{
  const db = client.db('BlogVista');
  const collection = db.collection('Blogg');
  await collection.insertOne(req.body);
  res.send({response: 'success'})
})