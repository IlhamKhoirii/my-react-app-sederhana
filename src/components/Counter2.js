import React, { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(angka, action) {
    switch (action.type) {
        case 'increment':
            return { count: angka.count + 1 };
        case 'decrement':
            return { count: angka.count - 1 };
        default:
            throw new Error();
    }
}
function Counter2() {
    const [angka, fungsiMengubahNilai] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {angka.count}
            <button onClick={() => fungsiMengubahNilai({ type: 'increment' })}> + </button>
            <button onClick={() => fungsiMengubahNilai({ type: 'decrement' })}> - </button>
        </div>
    );
}


export default Counter2;