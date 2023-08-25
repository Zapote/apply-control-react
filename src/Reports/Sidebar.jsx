import React, { useEffect, useState } from "react";
import api from "../Api/Api";
import { Accordion, Button, Tab, Tabs } from "react-bootstrap";

const Sidebar = () => {
  const [appFields, setAppFields] = useState(null);
  const [evalFields, setEvalFields] = useState(null);
  const [customReports, setCustomReports] = useState(null);
  
  useEffect(() => {
    fetchFields();
  }, []);

  const fetchFields = () => {
    api.get("/reportFields?type=app").then((result) => {
      setAppFields(result.data);
    });

    api.get("/reportFields?type=eval").then((result) => {
      setEvalFields(result.data);
    });

    api.get("/reportFields?type=cust").then((result) => {
      setCustomReports(result.data);
    });
  };

  return (
    <div className="border" style={{ width: "250px" }}>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sparade Rapporter</Accordion.Header>
          <Accordion.Body>
            <div className="d-grid gap-2">
              {customReports ? (
                customReports.map((field, i) => (
                  <Button variant="secondary" vertical="true">
                    {field.description}
                  </Button>
                ))
              ) : (
                <span></span>
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bygg ny rapport</Accordion.Header>
          <Accordion.Body>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="app" title="App">
                <div className="d-grid gap-2">
                  {appFields ? (
                    appFields.map((field, i) => (
                      <Button variant="secondary" vertical="true">
                        {field.description}
                      </Button>
                    ))
                  ) : (
                    <span></span>
                  )}
                </div>
              </Tab>
              <Tab eventKey="profile" title="Eval">
                <div className="d-grid gap-2">
                  {evalFields ? (
                    evalFields.map((field, i) => (
                      <Button variant="secondary" vertical="true">
                        {field.description}
                      </Button>
                    ))
                  ) : (
                    <span></span>
                  )}
                </div>
              </Tab>
            </Tabs>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Sidebar;
