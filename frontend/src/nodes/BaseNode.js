// BaseNode.js - This is my "Master Blueprint" for all nodes.
// Updated with the VectorShift Purple Dark-Mode Theme.

import { Handle } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{
      width: 200, 
      minHeight: 80, 
      border: '1px solid #4c1d95', // Deep purple border
      borderRadius: '12px',
      background: '#1e1b4b', // Dark navy background
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      color: '#fff', // White text
      fontFamily: 'Inter, sans-serif',
      overflow: 'hidden'
    }}>
      {/* The Header (Vibrant Purple Title Bar) */}
      <div style={{
        background: '#6366f1', // Vibrant purple
        padding: '10px 12px',
        fontWeight: '600',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff'
      }}>
        {label}
      </div>

      {/* The Content Area */}
      <div style={{ padding: '15px', flex: 1 }}>
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
            background: '#818cf8', // Lighter purple dots
            width: '8px', 
            height: '8px',
            border: '2px solid #fff', // White outline to match screenshot
            ...h.style 
          }}
        />
      ))}
    </div>
  );
};
