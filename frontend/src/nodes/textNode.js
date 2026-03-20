// textNode.js - An upgraded "Smart" Text Node
// Fixed the auto-resizing logic to use scrollHeight for a smoother experience.

import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Auto-resize the textarea height based on its content
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Reset height to recalculate
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to content height
    }
  }, [currText]);

  // Function to find variables like {{ name }} in the text
  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  };

  // Update handles whenever text changes
  useEffect(() => {
    const detectedVars = extractVariables(currText);
    setVariables(detectedVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Create handles: One output on the right, and one input for each variable on the left
  const dynamicHandles = [
    { type: 'source', position: Position.Right, id: 'output' },
    ...variables.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: varName,
      style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }
    }))
  ];

  return (
    <BaseNode id={id} label="Text" handles={dynamicHandles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ fontSize: '12px', marginBottom: '5px', color: '#94a3b8' }}>Text Content:</label>
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          style={{ 
            width: '100%', 
            minHeight: '40px',
            maxHeight: '200px', // Limit how much it can grow
            overflowY: 'hidden', // Hide scrollbar during resize
            resize: 'none',
            border: '1px solid #475569',
            borderRadius: '4px',
            padding: '5px',
            background: '#334155',
            color: 'white',
            fontSize: '12px'
          }}
          placeholder="Type {{variable}} to add handles..."
        />
      </div>
    </BaseNode>
  );
}
