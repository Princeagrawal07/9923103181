const axios = require("axios");
const getToken = require("./auth");
require("dotenv").config();

async function Log(stack, level, packageName, message) {
  try {
    const token = await getToken();

    const response = await axios.post(
      `${process.env.BASE_URL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

module.exports = Log;