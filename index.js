const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const pantryId = "47e60617-adf6-4988-bf65-c6793be487ce";

const app = express();
const PORT = 9443;
app.use(bodyParser.json());

// Creating endpoints for different API for the mentioned API Endpoint

//Adding an item (Endpoint)
app.post("/add-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;

    // Make a POST request to the Pantry API
    const response = await axios.post(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//Read Endpoint

app.get("/get-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;

    const response = await axios.get(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Update Endpoint
app.put("/update-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;
    const payload = req.body;

    // Make a PUT request to the Pantry API
    const response = await axios.put(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//Delete endpoint
app.delete("/delete-item/:pantryId/basket/:basketKey", async (req, res) => {
  try {
    const { pantryId, basketKey } = req.params;

    // Make a DELETE request to the Pantry API using axios 
    const response = await axios.delete(
      `https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Middleware for handling the error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});


//Starting the server 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
