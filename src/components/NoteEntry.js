import React, { Component } from 'react';

class NoteEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      editing: false,
      error: false,
      editTitle: this.props.title,
      editDetails: this.props.details

    }
  }

  displayToggle = () => {
    this.setState(prevState => ({
      display: !prevState.display
    }))
  }

  edit = () => {
    this.setState({
      editing: true
    });
    return;
  }

  save = () => {
    let titleVal = this.refs.updateTitle.value;
    let detailsVal = this.refs.updateDetails.value;

    if (!titleVal.length || !detailsVal.length) {
      this.setState({
        error: true
      })
    } else {
      this.setState({
        editTitle: titleVal,
        editDetails: detailsVal,
        editing: false,
        error: false
      })
    }
  }

  render() {
    const { editing, display, error } = this.state;
    const editedTitle = this.state.editTitle;
    const editedDetails = this.state.editDetails;


    return (
      <div className="entry">
        <div className="entry-header" onClick={editing ? null : this.displayToggle}>
          {editing ? (
            <input ref="updateTitle" className="edit-title" type="text" defaultValue={editedTitle} />
          ) : (
              <h2 className="entry-title">{editedTitle}</h2>
            )}
          {}
          <p className={"click-details " + (editing ? "hide-details" : null)}>{"(Click to " + (display ? "hide" : "show") + " details)"}</p>
        </div>
        <hr />
        <div className={"entry-content " + (!display ? "hide-details" : null)}>
          {editing ? (
            <textarea ref="updateDetails" className="edit-details" cols="10" rows="2" defaultValue={editedDetails}></textarea>
          ) : (
              <div>
                <h3 className="details-title">Details:</h3>
                <p className="details">{editedDetails}</p>
              </div>
            )}
          {error && <p className="error-message">Please fill in both title and details</p>}
          <div className="entry-buttons">

            {editing ? (
              <button className="save" onClick={this.save}>Save</button>
            ) : (
                <button className="edit" onClick={this.edit}>Edit</button>
              )
            }
            <button className="delete" onClick={this.props.deleteNote}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default NoteEntry;
