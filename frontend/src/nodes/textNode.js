import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Grows the text box as I type
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; 
      textarea.style.height = `${textarea.scrollHeight}px`; 
    }
  }, [currText]);

  // Look for {{ var }} tags and return the names
  const extractVariables = (text) => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  };

  useEffect(() => {
    const detectedVars = extractVariables(currText);
    setVariables(detectedVars);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

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
            boxSizing: 'border-box',
            minHeight: '40px',
            maxHeight: '200px',
            overflowY: 'hidden',
            resize: 'none',
            border: '1px solid #475569',
            borderRadius: '4px',
            padding: '8px',
            background: '#334155',
            color: 'white',
            fontSize: '12px',
            lineHeight: '1.4'
          }}
          placeholder="Type {{variable}} to add handles..."
        />
      </div>
    </BaseNode>
  );
}
