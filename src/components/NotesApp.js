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
    }

    onDeleteEventListener(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArsipEventListener() {

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
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className='app'>
                <div id="sidebar">
                    <span className="brand">
                        <i className='bx bx-note'></i> <span className="text">Notes App</span>
                    </span>
                    <ul className="side-menu top">
                        <li className="active">
                            <span>
                                <i className='bx bx-notepad'></i> <span className="text">Catatan</span>
                            </span>
                        </li>
                        <li >
                            <span>
                                <i className='bx bxs-file-archive'></i> <span className="text">Arsip</span>
                            </span>
                        </li>
                    </ul>
                </div>

                <section id="content">
                    <nav>
                        <i className='bx bx-menu'></i>
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
                            <div className="order">
                                <div className="heads">
                                    <h3>Catatan Aktif</h3>
                                </div>
                                <NotesList notes={this.state.notes} onDelete={this.onDeleteEventListener} />
                            </div>
                            <div className="order">
                                <div className="heads">
                                    <h3>Catatan Di Arsipkan</h3>
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