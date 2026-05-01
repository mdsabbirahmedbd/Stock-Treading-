require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());


const VerifyToken = require("./middleware/middleware");
const HoldingModel = require("./model/HoldingsModels");
const PositionMoeld = require("./model/PositionModels");
const OrderModel = require("./model/OrdersModels");
const UserModel = require("./model/UsersModles");



// authentication here 
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};


app.post('/register', async (req, res) => {
   try {
    const { name, email, password } = req.body;

     if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
 
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
 
    const user = await UserModel.create({ name, email, password });
 
    const token = generateToken(user);
    res.status(201).json({
      message: "Registration successful",
      token,
      user: { id: user._id, name: user.name, email: user.email},
    });
   } catch (error) {

      res.status(500).json({ message: "Server error", error: error.message });
   }
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await existingUser.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(existingUser);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });

  } catch (error) {

    res.status(500).json({ message: "Server error", error: error.message });
  }
});











// all api here 

app.get("/AllHoldings",VerifyToken, async (req, res) => {
  console.log(req.headers.authorization)
  const holdings = await HoldingModel.find()
  res.send(holdings)
})
app.get("/AllPositions",VerifyToken, async (req, res) => {
  const position = await PositionMoeld.find()
  res.send(position)
})


app.post("/orders",  async (req, res) => {
  const body = req.body
  const order = await OrderModel.create(body)
  res.send(order)
})

mongoose.connect(uri).then(() => {
  console.log("DB connected");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
})