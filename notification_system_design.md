# Stage 1

## REST APIs

### GET /notifications

Returns all notifications.

### POST /notifications

Creates a notification.

### PATCH /notifications/:id/read

Marks notification as read.

## Real-Time Notifications

Use WebSockets for real-time updates between backend and frontend.


# Stage 2

## Database Choice

PostgreSQL is preferred because:
- strong consistency
- indexing support
- relational structure

## Schema

Students Table
Notifications Table


# Stage 3

The unread notifications query becomes slow because of:
- large dataset
- full table scans

Use:
- indexing on studentID
- composite index on studentID + isRead


# Stage 4

Use:
- Redis caching
- pagination
- lazy loading


# Stage 5

Use:
- queue system
- retry mechanism
- async workers

Tools:
- RabbitMQ
- Kafka

# Stage 6
## Approach

Notifications are fetched dynamically from the provided Notification API.

Each notification is assigned a priority score using:
- notification type weight
- recency timestamp

Priority Weights:
- Placement = 3
- Result = 2
- Event = 1

Unread notifications are filtered first.

The notifications are then sorted based on:
1. Higher priority weight
2. More recent timestamp

Finally, the top 10 notifications are returned.

## Efficient Maintenance of Top 10

To efficiently maintain the top 10 notifications when new notifications arrive continuously:
- use a Min Heap / Priority Queue of size 10
- compare incoming notification priority with heap minimum
- replace minimum if incoming notification has higher priority

This ensures:
- insertion complexity: O(log 10)
- efficient real-time updates
- scalable notification ranking