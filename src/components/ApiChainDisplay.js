import React from 'react';
import "./index.css"

const ApiChainDisplay = ({ apiChain }) => {
    return (
        <div className=''>
            <h2 className="text-2xl font-bold mb-4 chain-content">API Chain</h2>
            <div className='comment-container'>
                {apiChain.map((api, index) => (
                    <div key={index}>
                        <p className='card'>{api.type}: {JSON.stringify(api.data)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApiChainDisplay;
