const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/product',async (req,res) => {
    try {
        const products = await Product.find()
        res.status(200).send({data:products})
    } catch (err){
        res.status(400).send({error:err})
    }
})

router.get('/product-by-category',async(req,res) =>{
    try{
        const products = await Product.aggregate([
            {$mactch:{}},
            {$group:{
                _id:'$category',
                products:{$push:'$$ROOT'}
            }},
            {$project:{name:'$_id',products:1,_id}}
        ])
        res.status(200).send({data:products})

    } catch(err){
        res.status(400).send({error:err})
    }
})
module.exports = router