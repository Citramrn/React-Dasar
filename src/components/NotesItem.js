import React from 'react';
import NotesItemBody from './NotesitemBody';
import DeleteButton from './DeleteButton';
import ArchivedButton from './ArchivedButton';
import ActiveButton from './ActivButton';

function NotesItem({ title, body, onDelete, id, onArchived, onActive }) {
    return (
        <div className="notes-item">
            <NotesItemBody title={title} body={body} />
            <div className="action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchivedButton id={id} onArchived={onArchived} />
                <ActiveButton id={id} onActive={onActive} />
            </div>
        </div>
    );
}

export default NotesItem;