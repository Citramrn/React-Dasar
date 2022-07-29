import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NotesItem key={note.id} {...note} onDelete={onDelete} id={note.id} />
                ))
            }
        </div>
    )
}

export default NotesList;