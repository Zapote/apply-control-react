import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap"; // Make sure you have the appropriate imports

function DropdownComponent({ selectedItem, defaultItem, items, handleSelect }) {
  return (
    <DropdownButton
      className="d-inline"
      title={selectedItem.name}
      onSelect={handleSelect}
      variant="success"
      id="dropdown-basic"
    >
      <Dropdown.Item key={defaultItem.sessionId} eventKey={defaultItem.sessionId}>
        {defaultItem.name}
      </Dropdown.Item>
      {items.map((item, i) => (
        <Dropdown.Item key={i} eventKey={item.sessionId}>
          {item.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default DropdownComponent;