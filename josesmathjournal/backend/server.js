const cors = require("cors");
const express = require("express");
const app = express();
const { resolve } = require("path");
require("dotenv").config();
const mongoConfig = require("./src/utils/db");
app.use(cors());
app.use(express.json());

const env = require("dotenv").config({ path: "./.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
app.use(express.static(process.env.STATIC_DIR));

app.get("/donate", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "USD",
      amount: 1999999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

// importing routes
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const blogRoutes = require("./src/routes/postRoutes");
const postRoutes = require('./src/routes/postRoutes')
const commentRoutes = require('./src/routes/commentRoutes')
// const donationRoutes = require('./src/routes/donationRoutes');

const { authorize } = require("./src/middleware/authMiddleware");

const PORT = 5000;

// Test
app.get("/api/test", (req, res) => {
  console.log("test");
  res.json("Hello World!");
});

// Auth routes
app.use("/api/auth", authRoutes);

// User routes
app.use("/api/users", authorize, userRoutes);

// Blog routes
app.use("/api/blogs", authorize, blogRoutes);



// Donate routes
// app.use('/api', donationRoutes);

app.use('/api/posts', postRoutes)
app.use('/comments', commentRoutes)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
  mongoConfig();
});
