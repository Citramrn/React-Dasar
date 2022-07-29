import React from 'react';

function DeleteButton({ id, onArsip }) {
    return (
        <div className="arzip">
            <button className='arsip' onClick={() => onArsip(id)}>Arsipkan</button>
        </div>
    )
}

export default DeleteButton
