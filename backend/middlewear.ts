import jwt from "jsonwebtoken"
import {Request, Response, NextFunction }from 'express'

export default function middlewear(req: Request, res:Response, next:NextFunction){

    const token = req.headers.authorization

    if(token?.startsWith('Bearer ')){

        const email = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
        if(email){
            next()
        }else{
            res.status(403).json({message:"you must be logged in"})
            return    
        }

    }else{
        res.status(403).json({message:"you must be logged in"})
        return
    }


}