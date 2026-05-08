const axios = require("axios");
require("dotenv").config();

async function getToken() {
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/auth`,
      {
        email: process.env.EMAIL,
        name: process.env.NAME,
        rollNo: process.env.ROLL_NO,
        accessCode: process.env.ACCESS_CODE,
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      }
    );

    return response.data.access_token;
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

module.exports = getToken;