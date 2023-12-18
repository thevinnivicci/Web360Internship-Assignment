import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { User } from "./models/user.model.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (user) {
      // Use bcrypt or another secure method for password comparison
      if (user.password === password) {
        res.json({ message: "Success", userId: user._id });
      } else {
        res.json("Password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/profile", async (req, res) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const userProfile = await User.findById(userId);

    if (userProfile) {
      res.json(userProfile);
    } else {
      res.status(404).json({ error: "Profile not found" });
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ error: "Failed to fetch user profile" });
  }
});


const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
  console.log(`⚙️Server is running on port ${PORT}`);
});
