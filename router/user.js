import express from "express" 
import { signin } from "../controller/auth/signin.js"
import { signup } from "../controller/auth/signup.js"
import {logout} from "../controller/auth/logout.js"

const router = express.Router()

router.post("/signin", signin)
router.post("/signup", signup)
router.post("/logout", logout)

export default router