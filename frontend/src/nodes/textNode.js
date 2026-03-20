// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px' }}>
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange} 
            style={{ width: '100%', marginTop: '5px', resize: 'none', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </label>
      </div>
    </BaseNode>
  );
}
