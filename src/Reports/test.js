import React, { useEffect, useState } from "react";
import axios from "axios";

function ReportFieldsComponent() {
  const [reportFields, setReportFields] = useState([]);

  // Your JWT token
  const jwtToken = "your_jwt_token_here";

  useEffect(() => {
    // Create a custom axios instance with Authorization header
    const axiosInstance = axios.create({
      baseURL: "https://localhost:5011/", // Replace with your base URL
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJaYXBvdGUuQXBwbHkiLCJzdWIiOiJqb25hcy5iZXJnbHVuZEB6YXBvdGUuc2UiLCJjaWQiOiIwMDEyIiwiY3NuIjoic29lYiIsImV4cCI6MTY5MjcyOTY0NS4wLCJpYXQiOjE2OTI3MTg4NDUuMCwidWlkIjoiMThhNDFhOTItYWI2OS00NDVlLTg3YmUtYTNiMjAxMGQ4MDkxIiwibmFtZSI6IkpvbmFzIEJlcmdsdW5kIiwicm9sZXMiOlsiQXBwbGljYXRpb24iLCJDb250cm9sIl19.LsMKkJ0cow0mStufXl3eRhgZJ4r-CRaJ2LzvmO1-xrk`,
        // Authorization: `Bearer ${jwtToken}`
      },
    });

    // Make a GET request to fetch report fields
    axiosInstance
      .get("/reportFields", {
        params: {
          type  : "app",
        },
      })
      .then((response) => {
        // Handle successful response
        setReportFields(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching report fields:", error);
      });
  }, []);

  return (
    <div>
      <h2>Report Fields</h2>
      <ul>
        {reportFields.map((field) => (
          <li key={field.id}>{field.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReportFieldsComponent;
