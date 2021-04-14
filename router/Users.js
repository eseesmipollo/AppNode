const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user')
router.get('/', async(req,res)=> {
    try{
      const arrayUsers = await User.find();
      console.log(arrayUsers)        
    } catch(error){
      console.log(error)
    }
})
router.post('/create', async(req ,res)=> {
  try {    
    await User.create(req.body);        
    console.log('response');
    res.sendStatus(200)

     }catch(error){
       console.log(error)
       res.status(500)
     }

})
router.post('/update', async(req ,res)=> {
  try {
    const filter = { email : req.body.email };
    const update = {...req.body};
    await User.updateOne(filter, update, {
      new: true
    });    
    console.log('response');
    res.sendStatus(200)

     }catch(error){
       console.log(error)
       res.status(500)
     }

})
router.post('/delete', async(req ,res)=> {
  try {
    const filter = { email : req.body.email };    
    await User.deleteOne(filter);    
    console.log('response');
    res.sendStatus(200)

     }catch(error){
       console.log(error)
       res.status(500)
     }

})
router.post('/read', async(req ,res)=> {
  try {
    const user = await User.find({ email : req.body.email });    
    console.log(user);
    console.log('response');
    res.sendStatus(200)

     }catch(error){
       console.log(error)
       res.status(500)
     }

})


module.exports = router;
