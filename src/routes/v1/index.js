const express =require('express')
const router=express.Router()
const UserController=require("../../controllers/user-controller")
const { userMiddleware } = require('../../middleware')


router.post("/user",userMiddleware.validateCreateUser,UserController.create)
router.get("/user/:id",UserController.get)
router.patch("/user/:id",UserController.update)
router.delete("/user/:id",UserController.destroy)
router.get("/user",UserController.getAllUser)


module.exports=router