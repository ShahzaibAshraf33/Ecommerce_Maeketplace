const { signup } = require("../services/signUpservice")
const ApiError = require("../utils/ApiError")

const signupController = async (req, res) => {
    try{
        const user = await signup(req.body)
        res.status(201).json({
            success : true,
            message : "User registered successfully",
            data: user,
        })
    }
    catch(error){
        if (error instanceof ApiError) {
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
            });
        }
        console.error('Signup Error:', error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}

module.exports = {signupController}