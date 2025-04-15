import React from 'react';

function Child () {
    
    console.log('A');

    return (
        <div>
            <h1>자식 Component</h1>
        </div>
    )
}

export default React.memo(Child);