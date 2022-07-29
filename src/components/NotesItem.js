import React from 'react';
import NotesItemBody from './NotesitemBody';
import DeleteButton from './DeleteButton';
import ArsipButton from './ArsipButton';

function NotesItem({ title, body, onDelete, id, onArsip }) {
    return (
        <div className="notes-item">
            <NotesItemBody title={title} body={body} />
            <div className="action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArsipButton id={id} onArsip={onArsip} />
            </div>
        </div>
    );
}

export default NotesItem;