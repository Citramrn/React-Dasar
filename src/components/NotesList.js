import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete, onArchived, onActive }) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NotesItem key={note.id} {...note} onDelete={onDelete} id={note.id} onArchived={onArchived} onActive={onActive} />
                ))
            }
        </div>
    )
}

export default NotesList;