const express = require('express');
const app = express();
const productExpressRoute = express.Router();
let ProductSchema=require('../model/product.model');

productExpressRoute.route('/').get((req,res)=>{
    ProductSchema.find((error,data)=>{
        if(error){
            return next(error)
        }else{
            res.json(data)
        }
    })
})

productExpressRoute.route('/product/:id').get((req,res)=>{
    ProductSchema.findById(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data)
     }
    }) 
 })

 productExpressRoute.route('/add-product').post((req,res,next)=>{
    ProductSchema.create(req.body,(error, data) =>{
    if (error) {
        return next(error)
    } else {
        res.json(data)
    }
})
})

productExpressRoute.route('/del-product/:id').delete((req,res)=>{
    ProductSchema.findByIdAndRemove(req.params.id,(error,data)=>{
     if (error) {
         return next(error)
     } else {
        res.status(200).json({
            msg: data
        })
     }
    }) 
 })


 productExpressRoute.route('/update-product/:id').put((req,res)=>{
    ProductSchema.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },(error,data)=>{
     if (error) {
         return next(error)
     } else {
         res.json(data);
         console.log('Deleted Successfully!')
     }
    }) 
 })


module.exports=productExpressRoute;