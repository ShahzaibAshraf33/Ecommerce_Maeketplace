const prisma = require("../config/prisma")
const bcrypt = require("bcryptjs")
const ApiError = require("../utils/ApiError")

const signup = async (userData) => {
    const { name, email, phoneNumber, password } = userData

  
    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ email }, { phoneNumber }],
        }
    })

    if (existingUser) {
        throw new ApiError(409, "User with this email or phone already exists")
    }

  
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

   
    const user = await prisma.user.create({
        data: {
            name,
            email,
            phoneNumber,
            password: hashedPassword
        }
    })

   
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
}

module.exports = { signup }