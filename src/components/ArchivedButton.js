import React from 'react';

function ArchivedButton({ id, onArchived }) {
    return (
        <div className="arzip">
            <button className='arsip' onClick={() => onArchived(id)}>Arsipkan</button>
        </div>
    )
}

export default ArchivedButton
