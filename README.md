# 🎭 API Automation – Playwright

 REST API test automation using **Playwright + TypeScript** — covering CRUD operations, auth flows & health checks.

## ✨ Features

- ✅ GET validation — status code & response body assertions
- 🔐 POST Auth — token generation via authentication endpoint
- 📝 POST Booking — create booking with JSON payload
- ✏️ PUT — modify existing booking details
- 🗑️ DELETE — remove booking and verify deletion
- 💓 Health Check — service availability monitoring

## 🌐 Endpoints Tested

- `GET /todos/1` — JSONPlaceholder response validation
- `POST /auth` — generate authentication token
- `POST /booking` — create a new booking
- `PUT /booking/{id}` — update booking by ID
- `DELETE /booking/{id}` — delete booking by ID
- `GET /ping` — API health check

---

## Structure

tests/       → GET, POST, PUT, DELETE & Health Check specs  
test-data/   → JSON request payloads  

---

## Run
npx playwright test                   # Run all tests  
npx playwright test --headed          # Headed mode  
npx playwright show-report            # View HTML report  

---

## Author

**Pratap Yadav**

> ⭐ Found this useful? Give it a star!
