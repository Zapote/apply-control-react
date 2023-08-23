import React from 'react';
import Panel from './PresentationPanel'; // Import the Panel component
import FilterPanel from './FilterPanel';

const FlexColumn = () => {
  return (
    <div className="border">
    FlexColumn
      <FilterPanel marginBottom="1px" />
      <Panel marginBottom="0" overflow="auto" />
    </div>
  );
};

export default FlexColumn;
