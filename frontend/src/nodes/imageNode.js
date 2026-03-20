// imageNode.js - A node for previewing an image from a URL or Local Upload

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [mode, setMode] = useState('url'); // 'url' or 'upload'

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const localUrl = URL.createObjectURL(file);
      setUrl(localUrl);
    }
  };

  const handles = [
    { type: 'target', position: Position.Left, id: 'image-input' },
    { type: 'source', position: Position.Right, id: 'image-output' }
  ];

  return (
    <BaseNode id={id} label="Image Preview" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        
        {/* Toggle Buttons */}
        <div style={{ display: 'flex', gap: '5px', marginBottom: '5px' }}>
          <button 
            onClick={() => setMode('url')} 
            style={{ 
              flex: 1, 
              fontSize: '10px', 
              background: mode === 'url' ? '#6366f1' : '#334155',
              border: 'none',
              color: 'white',
              padding: '4px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            URL
          </button>
          <button 
            onClick={() => setMode('upload')} 
            style={{ 
              flex: 1, 
              fontSize: '10px', 
              background: mode === 'upload' ? '#6366f1' : '#334155',
              border: 'none',
              color: 'white',
              padding: '4px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Upload
          </button>
        </div>

        {/* Dynamic Input Based on Mode */}
        {mode === 'url' ? (
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            placeholder="Paste Image URL..."
            style={{ width: '100%' }}
          />
        ) : (
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileUpload}
            style={{ width: '100%', fontSize: '10px' }}
          />
        )}

        {/* Image Preview Window */}
        {url && (
          <div style={{ 
            marginTop: '5px', 
            width: '100%', 
            height: '80px', 
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid #475569',
            background: '#020617'
          }}>
            <img 
              src={url} 
              alt="Preview" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        )}
      </div>
    </BaseNode>
  );
};
