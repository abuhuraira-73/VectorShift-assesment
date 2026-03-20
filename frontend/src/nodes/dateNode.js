// dateNode.js - A node for picking a date

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || '');

  const handles = [
    { type: 'source', position: Position.Right, id: 'date-output' }
  ];

  return (
    <BaseNode id={id} label="Date Picker" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px', marginBottom: '5px' }}>Select Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          style={{ width: '100%' }}
        />
      </div>
    </BaseNode>
  );
};
