import React from 'react';

class NotesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            title: '',
        }

        this.onTitleEventListener = this.onTitleEventListener.bind(this);
        this.onBodyEventListener = this.onBodyEventListener.bind(this);
        this.onSubmitEvent = this.onSubmitEvent.bind(this)
    }

    onBodyEventListener(event) {
        this.setState(() => {
            return {
                body: event.target.value
            }
        })
    }

    onTitleEventListener(event) {
        this.setState(() => {
            return {
                title: event.target.value
            }
        })
    }

    onSubmitEvent(event) {
        event.preventDefault();
        this.props.addNote(this.state)
    }

    render() {
        return (
            <div className="todo">
                <div className="head">
                    <h3>Catatan Baru</h3>
                </div>
                <div className="form-notes-container">
                    <form id="formDataNotes" action="" method="post" name="myForm" onSubmit={this.onSubmitEvent}>
                        <div className="form-group-input">
                            <input required type="text" value={this.state.title} name="title" id="title" maxLength='50' onChange={this.onTitleEventListener}
                                placeholder='title...' />
                            <p className='caracter' name='word' >Sisa karakter : {50 - this.onTitleEventListener.length} </p>
                        </div>
                        <div className="row">
                            <div className="form-group-input">
                                <textarea value={this.state.body} name="notes" id="notes" required placeholder='notes...' onChange={this.onBodyEventListener}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn-submit">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NotesApp;