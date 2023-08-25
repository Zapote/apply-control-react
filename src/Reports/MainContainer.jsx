import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "./Sidebar"; 
import { useQuery } from "react-query";
import api from "../Api/Api";
import FilterPanel from "./FilterPanel";
import PresentationPanel from "./PresentationPanel";

const MainContainer = () => {
  const queryBody = {
    submittedYear: 0,
    decisionYear: 0,
    reportType: "app",
    category: "",
    sessionId: 0,
    applicationType: "",
    status: "",
    onlyDone: false,
    fields: [
      { description: "nummer", name: "applicationNumber" },
      { name: "name", description: "Namn" },
    ],
  };

  const [queryFilter, setQueryFiler] = useState({
    runQuery: false,
    defaultSession: { sessionId: "0", name: "Välj Omgång" },
    defaultAppType: { type: "0", name: "Alla typer" },
    selectedSession: { sessionId: "", name: "Välj Omgång" },
    selectedAppType: { type: "0", name: "Alla typer" },
  });

  const [reportData, setReportData] = useState(null);

  const fetchReport = () => {
    queryBody.sessionId = queryFilter.selectedSession.sessionId;
    queryBody.applicationType =
      queryFilter.selectedAppType.type == 0
        ? null
        : queryFilter.selectedAppType.type;

    api.post("/reports", queryBody).then((result) => {
      setReportData(result.data);
    });
  };
  // const reportQuery = useQuery(["report"], fetchReport(), {
  //   enabled: false,
  //   refetchOnWindowFocus: false,
  //   refetchOnMount: false,
  // });

  return (
    <div className="container">
      <div className="d-flex">
        <div className="flex-fill">
          <FilterPanel
            className="border"
            fetchReport={fetchReport}
            setQueryFiler={setQueryFiler}
            queryFilter={queryFilter}
          />
          <PresentationPanel reportData={reportData} />
        </div>
        <div className="flex-fill">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
