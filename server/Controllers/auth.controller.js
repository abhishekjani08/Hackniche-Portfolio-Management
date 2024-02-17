const User = require("../Models/User");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { userName, email } = req.body;
    // Check for existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(401).send("User Already Exists with this email");
    }

    const password = req.body.userPassword;
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);

    const encryptedPassword = await bcrypt.hash(password, salt);
    console.log("Request Body: ", req.body);

    const newUser = new User({
      userName,
      email,
      userPassword: encryptedPassword,
    });

    await newUser.save();

    res.status(200).json({
      status: "User SignedUp in",
      User: newUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, userPassword } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        userPassword,
        user.userPassword
      );
      if (passwordMatch) {
        return res.json(user);
      } else {
        return res.json({ status: "Password Not Correct" });
      }
    } else {
      return res.json({ status: "User Not Found ", user: user });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    console.log(allUsers);
    return res.json(allUsers);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = { signup, login, getAllUsers };
