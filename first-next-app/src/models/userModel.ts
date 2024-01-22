import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a userName"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide a email "],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a Password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExipiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
