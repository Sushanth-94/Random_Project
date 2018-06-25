import React from 'react';
import ReactModal from 'react-modal'

const Modal= (props) => (
  <ReactModal
     isOpen={props.onShowModal}
     contentLabel="Product Modal"
     ariaHideApp={false}
  >
    <form onSubmit={props.onFormSubmit}>
      <input type="text" name="name" />
      <input type="text" name="rate" />
      <input type="number" name="quality" min="1" max="3"/>
      <button>Add</button>
    </form>
    <button onClick={props.onCloseModal}>Cancel</button>
  </ReactModal>
);

export default Modal;
