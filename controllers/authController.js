const connPool = require('../connect');
const { registerUser, findUserByEmail } = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function register(req,res){
  try {
    const { fullname, email, password, role } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    await registerUser({ fullname, email, password: hashedPass, role });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
};

async function login(req,res){
  try {
    const { email, password } = req.body;
    const [user] = await findUserByEmail(email);
    if (!user[0]) return res.status(400).json({ message: "User not found" });

    const checkPass = await bcrypt.compare(password, user[0].password);
    if (!checkPass) return res.status(401).json({ message: "Wrong credentials" });

    const token = jwt.sign({ id: user[0].user_id, role: user[0].role }, "secretKey", { expiresIn: "1d" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({error:error.message});
  }
};

module.exports = {register,login};
