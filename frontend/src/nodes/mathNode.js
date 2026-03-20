import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [num1, setNum1] = useState(data?.num1 || 0);
  const [num2, setNum2] = useState(data?.num2 || 0);
  const [operation, setOperation] = useState(data?.operation || '+');

  // Quick live calculation
  const getResult = () => {
    const n1 = parseFloat(num1) || 0;
    const n2 = parseFloat(num2) || 0;
    if (operation === '+') return n1 + n2;
    if (operation === '-') return n1 - n2;
    if (operation === '*') return n1 * n2;
    if (operation === '/') return n2 !== 0 ? (n1 / n2).toFixed(2) : 'Error';
    return 0;
  };

  const handles = [
    { type: 'target', position: Position.Left, id: 'a', style: { top: '30%' } },
    { type: 'target', position: Position.Left, id: 'b', style: { top: '70%' } },
    { type: 'source', position: Position.Right, id: 'result' }
  ];

  return (
    <BaseNode id={id} label="Math Operation" handles={handles}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)} 
          placeholder="A"
          style={{ width: '100%' }}
        />
        <select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
          style={{ width: '100%' }}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)} 
          placeholder="B"
          style={{ width: '100%' }}
        />
        <div style={{ 
          marginTop: '5px', 
          padding: '5px', 
          background: '#334155', 
          borderRadius: '4px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#818cf8'
        }}>
          Result: {getResult()}
        </div>
      </div>
    </BaseNode>
  );
};
