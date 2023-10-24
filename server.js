const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/getLyrics', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred');
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
