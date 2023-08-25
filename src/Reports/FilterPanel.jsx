import React, { useState, memo } from "react";
import { useQuery } from "react-query";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import api from "../Api/Api";

const FilterPanel = ({ fetchReport, setQueryFiler, queryFilter }) => {
  const { error, isLoading } = useQuery("myData", async () => {
    const sessRes = await api.get("/sessions");
    const appTypesRes = await api.get("/applicationtypes");

    setSession(() => [queryFilter.defaultSession, ...sessRes.data]);
    setAppTypes(() => [queryFilter.defaultAppType, ...appTypesRes.data]);
  });

  const [submYear] = useState(getYears);

  const [selSess, setSelSess] = useState(queryFilter.defaultSession);
  // const [selSubmYear, setSelSubmYear] = useState(queryFilter.);
  // const [selDecYear, setSelDesYear] = useState();
  const [selAppType, setSelAppType] = useState(queryFilter.defaultAppType);

  const [sessions, setSession] = useState([queryFilter.defaultSession]);
  const [appTypes, setAppTypes] = useState([queryFilter.defaultAppType]);
  function getYears() {
    var current = new Date().getFullYear();
    var years = [];

    for (var i = 0; i < 5; i++) {
      var year = current - i;
      years.push({ year, name: year });
    }

    return years;
  }

  const handleSelectSession = (e) => {
    const s = sessions.find((x) => x.sessionId == e);

    //if (s) setSelSess(s);
    setQueryFiler((queryFilter) => ({
      ...queryFilter,
      ...{ selectedSession: s },
    }));
  };  

  const handleSelectAppType = (e) => {
    const t = appTypes.find((x) => x.type == e);

    setQueryFiler((queryFilter) => ({
      ...queryFilter,
      ...{ selectedAppType: t},
    }));
  };

  // const handleSelectAppType = (e) => {
  //   if (e == "0") setSelAppType(defAppType);

  //   const t = appTypes.find((x) => x.type == e);

  //   if (t) {
  //     setSelAppType(t);
  //     updateQueryBody((queryBody) => ({
  //       ...queryBody,
  //       ...{ applicationType: t.type },
  //     }));
  //   }
  // };

  // const handleSelectSubmYear = (e) => {
  //   if (e == "0") setSelSubmYear(defSubmYear);

  //   const y = submYear.find((x) => x.year == e);

  //   if (y) {
  //     setSelSubmYear(y);
  //     updateQueryBody((queryBody) => ({ ...queryBody, ...{ year: y } }));
  //   }
  //  };

  const handleReportClick = () => {
    fetchReport();
  };

  if (isLoading) return <div>Fetching data...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    // {data ? (
    //   <p>{data}</p>
    // ) : (
    //   <p>No data yet.</p>
    // )}

    <div className="container">
    <div>
      <DropdownButton
        className="d-inline"
        title={queryFilter.selectedSession.name}
        onSelect={handleSelectSession}
        variant="success"
        id="dropdown-basic"
      >
        {sessions ? (
          sessions.map((sess, i) => (
            <Dropdown.Item key={i} eventKey={sess.sessionId}>
              {sess.name}
            </Dropdown.Item>
          ))
        ) : (
          <span></span>
        )}
      </DropdownButton>

      <DropdownButton
        className="d-inline"
        title={queryFilter.selectedAppType.name}
        onSelect={handleSelectAppType}
        variant="success"
        id="dropdown-basic"
      >
        {appTypes ? (
          appTypes.map((appType, i) => (
            <Dropdown.Item key={i} eventKey={appType.type}>
              {appType.name}
            </Dropdown.Item>
          ))
        ) : (
          <span></span>
        )}
      </DropdownButton>

      {/* <DropdownButton
        className="d-inline"
        title={selSubmYear.name}
        onSelect={handleSelectSubmYear}
        variant="success"
        id="dropdown-basic"
      >
        <Dropdown.Item key={defSubmYear.year} eventKey={defSubmYear.year}>
          {defSubmYear.name}
        </Dropdown.Item>
        {submYear.map((year, i) => (
          <Dropdown.Item key={i} eventKey={year.year}>
            {year.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>  */}

      <Button variant="primary" onClick={handleReportClick}>
        Get Report
      </Button>
      </div>
      <div>
          
      </div>
    </div>
  );
};

export default memo(FilterPanel);
