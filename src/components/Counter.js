import React, { useState } from 'react';

function Counter() {
    const [angka, fungsiSetAngka] = useState(1);

    return (
        <div>
            <p>Anda sudah klik sebanyak {angka} kali</p>
            <button onClick={() => fungsiSetAngka(angka + 1)}>
                Klik saya
            </button>
        </div>
    );
}

export default Counter;