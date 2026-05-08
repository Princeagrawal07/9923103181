const axios = require("axios");
require("dotenv").config();

async function getToken() {
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
}

async function fetchData() {
  try {
    const token = await getToken();

    const depots = await axios.get(
      `${process.env.BASE_URL}/depots`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const vehicles = await axios.get(
      `${process.env.BASE_URL}/vehicles`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      depots: depots.data,
      vehicles: vehicles.data,
    };
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

module.exports = fetchData;