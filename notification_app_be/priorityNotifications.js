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

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function calculatePriority(notification) {
  const weight =
    weights[notification.type] || 1;

  const recency =
    new Date(notification.timestamp).getTime();

  return weight * 10000000000000 + recency;
}

async function getTopNotifications() {
  try {
    const token = await getToken();

    const response = await axios.get(
      `${process.env.BASE_URL}/notifications`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const notifications =
      response.data.notifications || [];

    const unreadNotifications =
      notifications.filter(
        (notification) => !notification.isRead
      );

    unreadNotifications.sort(
      (a, b) =>
        calculatePriority(b) -
        calculatePriority(a)
    );

    const top10 =
      unreadNotifications.slice(0, 10);

    console.log(
      "\nTop Priority Notifications:\n"
    );

    console.log(top10);

  } catch (err) {
    console.log(
      err.response?.data || err.message
    );
  }
}

getTopNotifications();