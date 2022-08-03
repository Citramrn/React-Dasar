import React from 'react';

function ActiveButton({ id, onActive }) {
    return (
        <div className="arzipt">
            <button className='arsipt' onClick={() => onActive(id)}>Aktifkan</button>
        </div>
    )
}

export default ActiveButton
