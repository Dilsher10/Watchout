const User = require("../models/user-model");



// Register Controller

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const userCreated = await User.create({ name, email, password });
        res.status(201).json({ message: "Register Successfully", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};





// Login Controller

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            if (password === userExist.password) {
                res.status(200).json({ message: "Login Successfully", token: await userExist.generateToken(), userId: userExist._id.toString() });
            }
            else {
                res.status(401).json({ error: "Invalid Input" });
            }
        }
        else {
            res.status(401).json({ error: "Email not exists" });
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
}


module.exports = { register, login };