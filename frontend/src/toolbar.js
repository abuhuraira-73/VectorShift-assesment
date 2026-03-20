// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='customNote' label='Note' />
                <DraggableNode type='customDate' label='Date' />
                <DraggableNode type='customMath' label='Math' />
                <DraggableNode type='customChoice' label='Choice' />
                <DraggableNode type='customImage' label='Image' />
            </div>
        </div>
    );
};
