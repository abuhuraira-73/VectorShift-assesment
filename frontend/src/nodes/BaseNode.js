// BaseNode.js - This is my "Master Blueprint" for all nodes.
// It handles the title, the border, and the connection points (handles).

import { Handle } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{
      width: 200, 
      minHeight: 80, 
      border: '1px solid #777', 
      borderRadius: '8px',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* The Header (Title Bar) */}
      <div style={{
        background: '#f0f0f0',
        padding: '8px 10px',
        borderBottom: '1px solid #ccc',
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        fontWeight: 'bold',
        fontSize: '13px',
        color: '#333'
      }}>
        {label}
      </div>

      {/* The Content Area (Where the specific inputs/text go) */}
      <div style={{ padding: '12px', flex: 1 }}>
        {children}
      </div>

      {/* The Connection Dots (Handles) */}
      {handles.map((h, idx) => (
        <Handle
          key={`${id}-handle-${idx}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{ 
            background: '#555', 
            width: '8px', 
            height: '8px',
            ...h.style 
          }}
        />
      ))}
    </div>
  );
};
