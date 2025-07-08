const User = require('../models/user');

async function handleRegisterUser(req, res) {
    const { username, email, password } = req.body;
    
    try{
        const existingUser = await User.find({ email });

        if(existingUser.length === 0) {
            const newUser = await User.create({
                username,
                email,
                password
            });
            return res.status(201).json({ message: "User registered successfully", user: newUser });
        }
        return res.status(400).json({ message: "User already exists" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function handleLoginUser(req, res) {
    const { email, password } = req.body;

    try{
        const user = await User.find({ email, password });
        if(user.length > 0) {
            return res.status(200).json({ message: "Login successful", user: user[0] });
        } else {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { handleRegisterUser, handleLoginUser };