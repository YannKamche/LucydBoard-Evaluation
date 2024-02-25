import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

//sign up controller
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    //Encrypt the password using bcryptjs
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword});

    try {
        await newUser.save()
        res.status(201).json({ message: "User created successfully" });
    } catch(error) {
        next(error);
    }
};

//sign in controller
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        //check if email is correct or not
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));

        // if email exists, check valid passcode
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) return next(errorHandler(401, 'wrong credentials'))

        //add token to the cookie of the browser (token is a hash value of the unique things of user)
        //JWS_SECRET something unique about your project
        const token = jwt.sign( { id:validUser._id }, process.env.JWT_SECRET);

        //Remove the passcode after checking it
        const { password: hashedPassword, ...rest } = validUser._doc;

        //add expiry date
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour

        //add token to cookie
        res
            .cookie('access_token', token, {httpOnly: true, expires:
            expiryDate})
            .status(200)
            .json(rest)
        //httpOnly: true prevents third party applicatin to modiy the cockie

    } catch (error) {
        next(error) //handles error
    }
}


// The google function handles Google sign-in authentication
export const google = async (req, res, next) => {
  try {
    // Find user by email in the database
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // If user exists, generate JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      // Omit password from user data
      const { password: hashedPassword, ...rest } = user._doc;
      // Set expiration date for cookie
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      // Set access_token cookie and respond with user data
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      // If user doesn't exist, generate a random password
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      // Hash the generated password
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      // Create a new user with generated username and email, and hashed password
      const newUser = new User({
        username: req.body.name.split(' ').join('').toLowerCase(),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      // Save the new user to the database
      await newUser.save();
      // Generate JWT token for the new user
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      // Omit password from user data
      const { password: hashedPassword2, ...rest } = newUser._doc;
      // Set expiration date for cookie
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      // Set access_token cookie and respond with user data
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    // Handle errors
    next(error);
  }
};
