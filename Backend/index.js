require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

// middleware setup
app.use(cors());
app.use(express.json());

const HoldingModel = require("./model/HoldingsModels");

// app.get("/holdings", (req, res) => {
//   const holdings = [
//     {
//       symbol: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       ltp: 541.15,
//       curVal: 1082.3,
//       pnl: 6.2,
//       netChg: +0.58,
//       dayChg: +2.99,
//     },
//     {
//       symbol: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       ltp: 1522.35,
//       curVal: 3044.7,
//       pnl: 277.9,
//       netChg: +10.04,
//       dayChg: +0.11,
//     },
//     {
//       symbol: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       ltp: 2417.4,
//       curVal: 2417.4,
//       pnl: 81.55,
//       netChg: +3.49,
//       dayChg: +0.21,
//     },
//     {
//       symbol: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       ltp: 1555.45,
//       curVal: 1555.45,
//       pnl: 204.95,
//       netChg: +15.18,
//       dayChg: -1.6,
//     },
//     {
//       symbol: "ITC",
//       qty: 5,
//       avg: 202.0,
//       ltp: 207.9,
//       curVal: 1039.5,
//       pnl: 29.5,
//       netChg: +2.92,
//       dayChg: +0.8,
//     },
//     {
//       symbol: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       ltp: 266.45,
//       curVal: 1332.25,
//       pnl: 80.75,
//       netChg: +6.45,
//       dayChg: +3.54,
//     },
//     {
//       symbol: "M&M",
//       qty: 2,
//       avg: 809.9,
//       ltp: 779.8,
//       curVal: 1559.6,
//       pnl: -60.2,
//       netChg: -3.72,
//       dayChg: -0.01,
//     },
//     {
//       symbol: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       ltp: 2112.4,
//       curVal: 2112.4,
//       pnl: -81.3,
//       netChg: -3.71,
//       dayChg: +1.44,
//     },
//     {
//       symbol: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       ltp: 430.2,
//       curVal: 1720.8,
//       pnl: 423.4,
//       netChg: +32.7,
//       dayChg: -0.34,
//     },
//   ];

//   holdings.forEach((item) => {
//     let newHolding = new HoldingModel({
//       symbol: item.symbol,
//       qty: item.qty,
//       avg: item.avg,
//       ltp: item.ltp,
//       curVal: item.curVal,
//       pnl: item.pnl,
//       netChg: item.netChg,
//       dayChg: item.dayChg,
//     });
//     newHolding.save();
//   });

//  res.send("Done")

// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  mongoose.connect(uri);
  console.log("db connected");
});
