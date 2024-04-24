const bcrypt = require("bcrypt");
const { User } = require("../model/user.model");
const saltRounds = 10;

const registerUser = async (body) => {
  try {
    const { name, email, password } = body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({ name, email, password: hashedPassword });
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

const login = async (body) => {
  try {
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    let userWithoutPassword = user;
    //  userWithoutPassword.password = '';
    return userWithoutPassword;
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};


module.exports = {
  registerUser,
  login,
};
