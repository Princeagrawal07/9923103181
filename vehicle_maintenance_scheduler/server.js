const express = require("express");
const fetchData = require("./scheduler");

const app = express();

function knapsack(tasks, maxHours) {
  const n = tasks.length;

  const dp = Array.from({ length: n + 1 }, () =>
    Array(maxHours + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const duration = tasks[i - 1].Duration;
    const impact = tasks[i - 1].Impact;

    for (let w = 0; w <= maxHours; w++) {
      if (duration <= w) {
        dp[i][w] = Math.max(
          impact + dp[i - 1][w - duration],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maxHours];
}

app.get("/", async (req, res) => {
  try {
    const data = await fetchData();

    const depots = data.depots.depots;
    const vehicles = data.vehicles.vehicles;

    const results = depots.map((depot) => {
      const bestImpact = knapsack(
        vehicles,
        depot.MechanicHours
      );

      return {
        depotId: depot.id,
        mechanicHours: depot.MechanicHours,
        maximumImpact: bestImpact,
      };
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});