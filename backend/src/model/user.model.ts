import mongoose from "mongoose";
import UserInterface from "../interface/user.interface";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema<UserInterface>(
  {
    fullName: {
      type: String,
      min: [2, "fullName is too short"],
      max: [30, "fullName is too long"],
      required: [true, "fullName is a required field"],
    },
    email: {
      type: String,
      required: [true, "email is a required field"],
      unique: true,
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "password is a required field"],
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
      ],
    },
    userName: {
      type: String,
      unique: true,
      required: [true, "Username is a required field"],
    },
    jwt: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (password: any) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model<UserInterface>("User", userSchema);

export default User;
