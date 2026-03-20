// noteNode.js - A simple sticky note node

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');

  return (
    <BaseNode id={id} label="Note" handles={[]}>
      <div style={{ background: '#fef08a', padding: '10px', borderRadius: '4px' }}>
        <textarea 
          value={note} 
          onChange={(e) => setNote(e.target.value)} 
          placeholder="Enter your note here..."
          style={{ 
            width: '100%', 
            border: 'none', 
            background: 'transparent', 
            color: '#854d0e',
            fontSize: '13px',
            outline: 'none',
            resize: 'none',
            minHeight: '60px'
          }}
        />
      </div>
    </BaseNode>
  );
};
