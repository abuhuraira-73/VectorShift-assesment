// choiceNode.js - A node for picking from a list of options

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ChoiceNode = ({ id, data }) => {
  const [choice, setChoice] = useState(data?.choice || 'Option 1');

  const handles = [
    { type: 'source', position: Position.Right, id: 'choice-output' }
  ];

  return (
    <BaseNode id={id} label="Choice Menu" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px', marginBottom: '5px' }}>Pick one:</label>
        <select 
          value={choice} 
          onChange={(e) => setChoice(e.target.value)} 
          style={{ width: '100%' }}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
    </BaseNode>
  );
};
