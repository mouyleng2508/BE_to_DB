const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// get
router.get('/', async (req, res) => {
    const tasklist = await loadTasksCollection();

    res.send(await tasklist.find({}).toArray())
    // res.send("Hello World")
})



// post
router.post('/', async(req, res) => {
    const tasklist = await loadTasksCollection();

    await tasklist.insertOne({
        task: req.body.task,
        dateCreated: new Date()
    })

    res.status(201).send()
})

// delete
router.delete('/:id', async(req, res) => {
    const tasklist = await loadTasksCollection();
    await tasklist.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send()
})

async function loadTasksCollection(){
    // connect database
    const client = await mongodb.MongoClient.connect("mongodb+srv://Mouyleng:Mouyleng@mouylengclouddb.vbio3.mongodb.net/MouylengCloudDB?retryWrites=true&w=majority", {useNewUrlParser: true})

    return client.db('MouylengCloudDB').collection("mytasks")
}


module.exports = router