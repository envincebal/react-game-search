import React from 'react';

const NoteForm = (props) => {
  const { titleValue,
    titleHandle,
    detailsValue,
    detailsHandle,
    onSubmit } = props;
  return (
    <div>
      <form className="form-section">
        <input
          className="title-input"
          type="type"
          placeholder="Title"
          value={titleValue}
          onChange={titleHandle}
        />
        <br />
        <textarea
          className="details-input"
          cols="20"
          rows="3"
          placeholder="Details"
          value={detailsValue}
          onChange={detailsHandle}
        />
        <br />
        <button
          className="input-button"
          onClick={onSubmit}>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default NoteForm;