const express = require('express')
const { param } = require('express/lib/request')
const app = express()
const menRanking = require('../models/mens')
require('../db/conn')
const port = process.env.PORT || 8000



// Middleware Which is use to get data in proper form 
app.use(express.json());
// First of All we will handle Post Request 
app.post('/men' , async(req , res)=>{
      try {
        const addingData = new menRanking(req.body)
        const insertData = await addingData.save()
        res.status(201).send(addingData)
      } catch (error) {
        res.status(400).send(error)
      }
})


// Now 2nd  we will handle Get Request 
app.get('/men' , async(req , res)=>{
  try {
    const gettingData = await menRanking.find({})
    res.status(201).send(gettingData)
  } catch (error) {
    res.status(400).send(error)
  }
})




// Now 3rd  we will handle Patch Request 
app.patch('/men/:id' , async(req , res)=>{
  try {
    const _id = req.params.id;
    const getOne = await menRanking.findByIdAndUpdate(_id, {
      "name" : "Hammad Saeed Khan"
    })
    res.status(201).send(getOne)
  } catch (error) {
    res.status(400).send(error)
  }
})




// Now 4th we will handle Delete Request 
app.delete('/men/:id' , async(req , res)=>{
  try {
    const _id = req.params.id;
    const delOne = await menRanking.findByIdAndDelete(_id)
    res.status(201).send(delOne)
  } catch (error) {
    res.status(400).send(error)
  }
})

















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})