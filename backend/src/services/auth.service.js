const User = require("../models/user.model")

const {genSaltSync, hashSync} = require("bcrypt");
const {SALT_ROUNDS} = require("../utils/config");

const register = async (payload)=>{
    const {password} = payload;

    const salt = genSaltSync(SALT_ROUNDS);
    const hash = hashSync(password, salt);

    return await User.create({...payload,password:hash});
};

const login = async(payload)=>{
    const { email } = payload;
    console.log(email,payload);

    const user = await User.findOne({
        email:email,
    });
    console.log(user);
    return user;
};



module.exports = authService ={
    register,
    login,
};