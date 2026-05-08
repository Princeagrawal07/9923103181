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

async function Log(stack, level, packageName, message) {
  try {
    const token = await getToken();

    await axios.post(
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
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = Log;