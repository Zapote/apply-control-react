import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5011/", // Your API base URL
  headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJaYXBvdGUuQXBwbHkiLCJzdWIiOiJqb25hcy5iZXJnbHVuZEB6YXBvdGUuc2UiLCJjaWQiOiIwMDEyIiwiY3NuIjoic29lYiIsImV4cCI6MTY5Mjk2MDU2MC4wLCJpYXQiOjE2OTI5NDk3NjAuMCwidWlkIjoiMThhNDFhOTItYWI2OS00NDVlLTg3YmUtYTNiMjAxMGQ4MDkxIiwibmFtZSI6IkpvbmFzIEJlcmdsdW5kIiwicm9sZXMiOlsiQXBwbGljYXRpb24iLCJDb250cm9sIl19.H38LqwEJQ4q73ZB_QXAnhaaUcKWAGrJr15rtjY-IYQw",
    "Content-Type": "application/json",
  },
});

export default api;
