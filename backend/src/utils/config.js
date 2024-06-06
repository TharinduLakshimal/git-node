const {configDotenv} = require("dotenv");

configDotenv();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const SALT_ROUNDS = Number(process.env.SALT_ROUNDS);
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    PORT,
    MONGODB_URI,
    SALT_ROUNDS,
    JWT_SECRET,
};