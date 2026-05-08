const notifications = [
  {
    id: 1,
    type: "Placement",
    message: "Google Hiring",
    timestamp: "2026-05-08T10:00:00",
  },
  {
    id: 2,
    type: "Event",
    message: "Tech Fest",
    timestamp: "2026-05-08T09:00:00",
  },
  {
    id: 3,
    type: "Result",
    message: "Mid Sem Result",
    timestamp: "2026-05-08T11:00:00",
  },
  {
    id: 4,
    type: "Placement",
    message: "Microsoft Hiring",
    timestamp: "2026-05-08T12:00:00",
  },
  {
    id: 5,
    type: "Event",
    message: "Hackathon",
    timestamp: "2026-05-07T08:00:00",
  },
];

const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

function getPriorityScore(notification) {
  const weight = weights[notification.type];

  const recency =
    new Date(notification.timestamp).getTime() / 1000000000;

  return weight * 1000 + recency;
}

function getTopNotifications(data, topN = 10) {
  return data
    .sort(
      (a, b) =>
        getPriorityScore(b) - getPriorityScore(a)
    )
    .slice(0, topN);
}

const topNotifications = getTopNotifications(notifications);

console.log("Top Priority Notifications:\n");

console.log(topNotifications);