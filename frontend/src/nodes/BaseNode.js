import { Handle } from 'reactflow';

// Master template for all my nodes
export const BaseNode = ({ id, label, children, handles = [] }) => {
  return (
    <div style={{
      width: 200, 
      minHeight: 80, 
      border: '1px solid #4c1d95',
      borderRadius: '12px',
      background: '#1e1b4b',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
      color: '#fff',
      fontFamily: 'Inter, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Brand header */}
      <div style={{
        background: '#6366f1',
        padding: '10px 12px',
        fontWeight: '600',
        fontSize: '14px',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff'
      }}>
        {label}
      </div>

      <div style={{ padding: '15px', flex: 1 }}>
        {children}
      </div>

      {/* Connector dots */}
      {handles.map((h, idx) => (
        <Handle
          key={`${id}-handle-${idx}`}
          type={h.type}
          position={h.position}
          id={`${id}-${h.id}`}
          style={{ 
            background: '#818cf8',
            width: '8px', 
            height: '8px',
            border: '2px solid #fff',
            ...h.style 
          }}
        />
      ))}
    </div>
  );
};
