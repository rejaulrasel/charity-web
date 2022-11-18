const express = require('express')
const cors = require('cors')//cors for own server connected with own
const { MongoClient } = require('mongodb');
require("dotenv").config();//dotenv config
const app = express()
const ObjectId = require('mongodb').ObjectId;
const port = process.env.PORT || 8000

//Middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.f2uob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri);



async function run() {
  try {
    await client.connect();
    console.log('yes database connected')
    

    const database = client.db("WE-CARE");
    const servicesCollection = database.collection("services");
    const donationCollection = database.collection("donation");
  


    //get all Services
    app.get('/services', async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      // console.log(services);
      // console.log('yes database connected')
      res.send(services);
    })

  


    // add all donation
    app.post("/donation", async (req, res) => {
      console.log('hit donation')
      console.log(req.body);
      const result = await donationCollection.insertOne(req.body);
      console.log(result);
      res.json(result); 
    });

    //get all donation
    app.get('/donors', async (req, res) => {
      const cursor = donationCollection.find({});
      const donations = await cursor.toArray();
      // console.log(donations);
      // console.log('yes database connected')
      res.send(donations);
    })

    

    
    




  }
  finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello friends! This is WE-CARE server side!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})