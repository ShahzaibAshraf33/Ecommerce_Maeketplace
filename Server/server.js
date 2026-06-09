require("dotenv").config()
const app = require('./app');
const prisma = require('./features/Auth/config/prisma');

const PORT = process.env.PORT || 5000;


(async () => {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log('✅ Database connected successfully')
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    process.exit(1)
  }
})()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});