const {UserService}=require("../services/index")
const validator = require('validator')


const userService=new UserService()
const create=async(req,res)=>{
    try {
       if(!validator.isEmail(req.body.email)) throw new Error("email is invalid")
        const userInput={
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            message:req.body.message,
            email:req.body.email
        }
        const User=await userService.createUser(userInput)
        return res.status(201).json({
            data:User,
            success:true,
            message:"Successfully created a User ",
            err:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to crate a User ",
            err:error
        })
        
    }

}

const update=async(req,res)=>{
    try {
        if(req.body.email) if(!validator.isEmail(req.body.email)) throw new Error("email is invalid")        
        const User=await userService.updateUser(req.params.id,req.body)
        return res.status(201).json({
            data:User,
            success:true,
            message:"Successfully updated a User ",
            err:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to updated a User ",
            err:error
        })
        
    }

}
const destroy=async(req,res)=>{
    try {
        const User=await userService.deleteUser(req.params.id)
        return res.status(201).json({
            
            success:true,
            message:"Successfully deleted a User ",
            err:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to delete a User ",
            err:error
        })
        
    }

}
const get=async(req,res)=>{
    try {
        console.log("fine")
        const User=await userService.getUser(req.params.id)
        return res.status(201).json({
            data:User,
            success:true,
            message:"Successfully get a User ",
            err:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get  a User ",
            err:error
        })
        
    }

}
const getAllUser=async(req,res)=>{
    try {
       
        const User=await userService.getAllUser()
        return res.status(200).json({
            data:User,
            success:true,
            message:"Successfully get the All User ",
            err:{}
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get  a User ",
            err:error
        })
        
    }

}
module.exports={
    create,
    update,
    get,
    destroy,
    getAllUser
}
