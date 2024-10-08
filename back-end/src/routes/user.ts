import { Router } from "express";
import controllers from "../controlleurs/users";
import validator from "../middlewares/validator";
import userConnect from "../middlewares/connected";

const user = Router()

user.post('/signup',validator.userValidator,  controllers.postUser)
user.post('/login', controllers.Userlogin)
user.post('/logout', controllers.LogoutUser)
user.get('/profile',userConnect.verifyAccessToken, userConnect.verifyRefreshToken, controllers.getUser)
user.put('/profile',userConnect.verifyAccessToken, userConnect.verifyRefreshToken, controllers.updateUser)
user.delete('/profile',userConnect.verifyAccessToken, userConnect.verifyRefreshToken, controllers.deleteUser)

export default user