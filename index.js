const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000

// app.use(cors())
app.use(express.json())
// USER: AB_SOFT_ADMIN
// PAS: TjWaWkzRHEUBANKQ

// const handler = (req, res) => {
//     res.sed('hello from backend')
// }
// app.get('/', handler);


const uri = "mongodb+srv://AB_SOFT_ADMIN:TjWaWkzRHEUBANKQ@cluster0.l12hi.mongodb.net/AB_SOFT_ADMIN?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


// const client = new MongoClient(uri);
// client.connect(err => {
//     const collection = client.db("AB_SOFT").collection("COURSES");
//     // perform actions on the collection object
//     client.close();
// });

async function run() {
    try {
        await client.connect();
        const database = client.db("AB_SOFT");
        const test = database.collection("COURSES");

        const student = {
            name: 'sabbir', aage: '25'
        }
        const result = await test.insertOne(student);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);
        res.json(result)


        // order api start 
        // app.post('/confirmOrders', async (req, res) => {
        //     const student = {
        //         name: 'sabbir', aage: '25'
        //     }
        //     console.log(appointment)
        //     const result = await test.insertOne(student);
        //     console.log(`A document was inserted with the _id: ${result.insertedId}`);
        //     res.json(result)
        // })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);
app.get('/', (req, res) => {
    res.send('Hello backend')
});

app.listen(port, () => {
    console.log('listening to port:', port)
})