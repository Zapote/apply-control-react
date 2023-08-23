import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5011/", // Your API base URL
  headers: {
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJaYXBvdGUuQXBwbHkiLCJzdWIiOiJqb25hcy5iZXJnbHVuZEB6YXBvdGUuc2UiLCJjaWQiOiIwMDEyIiwiY3NuIjoic29lYiIsImV4cCI6MTY5Mjc5Njc3OC4wLCJpYXQiOjE2OTI3ODU5NzguMCwidWlkIjoiMThhNDFhOTItYWI2OS00NDVlLTg3YmUtYTNiMjAxMGQ4MDkxIiwibmFtZSI6IkpvbmFzIEJlcmdsdW5kIiwicm9sZXMiOlsiQXBwbGljYXRpb24iLCJDb250cm9sIl19.ktJwklDAQP0qPph6_CY1EtKruh8tB95evH0t4xsdv-I",    
    "Content-Type": "application/json",
  },
});

export default api;
