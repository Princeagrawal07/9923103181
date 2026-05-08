# 9923103181

## Overview
This repository contains the backend assignment implementation including:
- Logging Middleware
- Vehicle Maintenance Scheduler
- Priority Notification System

## Project Structure

### logging_middleware
Reusable logging middleware integrated with the provided Test Server APIs.

### vehicle_maintenance_scheduler
Backend service that:
- fetches depot and vehicle data
- performs optimization using Dynamic Programming (Knapsack)
- returns maximum maintenance impact

### notification_app_be
Priority Inbox implementation that:
- fetches notifications from API
- ranks notifications using priority weights and recency
- returns top priority unread notifications

## Technologies Used
- Node.js
- Express.js
- Axios
- JavaScript

## API Features
- Authentication using Bearer Token
- Logging Middleware Integration
- Protected API Consumption
- Dynamic Notification Ranking

## Screenshots
Screenshots of outputs and API testing are included inside respective folders.