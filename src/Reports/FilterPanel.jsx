import React, { useState } from "react";
import { useQuery } from "react-query";
import { Dropdown, DropdownButton } from "react-bootstrap";
import api from "../Api/Api";

const FilterPanel = ({ marginBottom, overflow }) => {
  // $scope.sessions = [];
  // $scope.submittedYear = "0";
  // $scope.decisionYear = "0";
  // $scope.isDone = false;
  // $scope.years = getYears();

  const defaultSession = { sessionId: "0", name: "Välj omgång" };
  const defSubmYear = { year: 0, name: "Inskickad år" };
  const defDecYear = { year: 0, name: "Beslutad år" };
  const defAppType = { type: "0", name: "Alla typer" };

  const [selectedSession, setSelectedSession] = useState(defaultSession);

  const [selSubmYear, setSelSubmYear] = useState(defSubmYear);
  const [selDecYear, setSelDesYear] = useState(defDecYear);
  const [selAppType, setSelAppType] = useState(defAppType);
  const [sessions, setSession] = useState(null);

  const { error, isLoading } = useQuery("myData", async () => {
    const response = await api.get("/sessions");

    setSession(() => response.data);
    return response.data;
  });

  function getYears() {
    var current = new Date().getFullYear();
    var years = [];

    for (var i = 0; i < 5; i++) {
      years.push(current - i);
    }

    return years;
  }

  const handleSelect = (e) => {
    if (e === "0") setSelectedSession(defaultSession);

    const s = sessions.find((x) => x.sessionId === e);

    if (s) setSelectedSession(s);
  };

  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container">
      <DropdownButton
        title={selectedSession.name}
        onSelect={handleSelect}
        variant="success"
        id="dropdown-basic"
        defaultValue={"Test deault"}
      >
        <Dropdown.Item key={"0"} eventKey={"0"}>
          {"Välj omgång"}
        </Dropdown.Item>
        {sessions.map((session, i) => (
          <Dropdown.Item key={i} eventKey={session.sessionId}>
            {session.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default FilterPanel;
