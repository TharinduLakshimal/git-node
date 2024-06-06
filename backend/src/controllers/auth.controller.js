const { compareSync } = require("bcrypt");

const User = require("../models/user.model");

const authService = require("../services/auth.service");

const { genarateToken } = require("../utils/token");

const register = async (req, res) => {
  const payload = req.body;

  let user = await User.findOne({ email: payload.email });

  if (user) {
    return res.status(400).json({
      message: "user already exists",
    });
  }

  try {
    user = await authService.register(payload);

    return res.status(200).json({ message: "user created", user });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const payload = req.body;

  try {
    const user = await authService.login(payload);

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const passwordMatch = compareSync(payload.password, user.password);

    if (!passwordMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = await genarateToken(user);

    return res.status(200).json({ message: "Login success", token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error", error });
  }
};
module.exports = authController = {
  register,
  login,
};
