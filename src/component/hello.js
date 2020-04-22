import React from 'react';

const Hello = () => {
    // with JSX
    // return (
    //     <div className: 'dummyClass'>
    //         <h1>Hellooo Again</h1>
    //     </div>
    // )

    // without JSX
    return React.createElement('div', {id: 'hello'}, React.createElement('h1', {className: 'dummyClass'}, 'Hello Again'));
}

export default Hello;