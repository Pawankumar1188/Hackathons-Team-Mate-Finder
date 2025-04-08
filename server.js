// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/hackbud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Schema and Model
const requestSchema = new mongoose.Schema({
    to: String,
    timestamp: String,
});
const Request = mongoose.model("Request", requestSchema);

// API to Save Request
app.post("/api/send-request", async (req, res) => {
    const { to, timestamp } = req.body;
    const newRequest = new Request({ to, timestamp });
    await newRequest.save();
    res.status(201).json({ message: "Request stored successfully!" });
});

// API to Get All Requests
app.get("/api/requests", async (req, res) => {
    const requests = await Request.find();
    res.json(requests);
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
