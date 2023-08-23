import React from 'react';

const Sidebar = () => {
  return (
    <div className="border" style={{ width: '250px' }}>
    Sidebar
      <select className="form-control flex-none">
        <option value="app">Option 1</option>
        <option value="eval">Option 2</option>
      </select>
      <select multiple className="form-control flex-item">
        {/* Select options */}
      </select>
    </div>
  );
};

export default Sidebar;
