import React from 'react';
import NotesList from '../components/NotesList';
import NotesInput from '../components/NotesInput';
import { getInitialData, showFormattedDate } from '../utils/data';

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: getInitialData(),
            notetwo: showFormattedDate(new Date()),
        }

        this.addContactEventSubmit = this.addContactEventSubmit.bind(this)
        this.onDeleteEventListener = this.onDeleteEventListener.bind(this)
        this.onArchivedEventListener = this.onArchivedEventListener.bind(this)
    }

    onDeleteEventListener(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchivedEventListener(id) {
        const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: !note.archived } : note)
        this.setState({ notes })
    }

    addContactEventSubmit({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: this.state.notetwo,
                    },
                ]
            }
        })
    }

    render() {
        const nonActiveNotes = this.state.notes.filter((note) => {
            return note.archived === false
        });

        const activeNotes = this.state.notes.filter((note) => {
            return note.archived === true
        });

        return (
            <div className='app'>
                <section id="content">
                    <nav>
                        <form action="#">
                            <div className="form-input">
                                <input type="search" placeholder="Search..." />
                                <button type="submit" className="search-btn"><i className='bx bx-search'></i></button>
                            </div>
                        </form>
                    </nav>
                    <main>
                        <div className="head-title">
                            <div className="left">
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                        <div className="table-data">
                            <NotesInput addNote={this.addContactEventSubmit} />
                            <div className="grid">
                                <div className="order">
                                    <div className="heads">
                                        <h3>Catatan Aktif</h3>
                                    </div>
                                    <NotesList notes={nonActiveNotes} onDelete={this.onDeleteEventListener} onArchived={this.onArchivedEventListener} />
                                </div>
                                <div className="order">
                                    <div className="heads">
                                        <h3>Catatan Di Arsipkan</h3>
                                    </div>
                                    <NotesList notes={activeNotes} onDelete={this.onDeleteEventListener} onArchived={this.onArchivedEventListener} />
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        )
    }

}

export default NotesApp;