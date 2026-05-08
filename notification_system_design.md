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

Priority notifications are ranked using:
- notification type weight
- recency