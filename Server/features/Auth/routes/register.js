const express = require("express")
const router = express.Router()
const { signupController } =require("../controllers/SignupController")
const { signupSchema } = require("../validations/signupSchema")
const validate =require("../middleware/validate.middleware")


router.post("/signup",validate(signupSchema),signupController)

module.exports = router