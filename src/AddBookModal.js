import React, { Component } from "react";

import BookForm from "./BookForm";
import Modal from "react-responsive-modal";

class AddBookModal extends Component {
  state = {
    open: false
  };

  onOpenModal = () => this.setState({ open: true });

  onCloseModal = () => this.setState({ open: false });

  render() {
    // ##ASK## why the lhs curely braces
    const { open } = this.state;

    return (
      <div>
        <Modal open={open} onClose={this.onCloseModal} center>
          <BookForm author={this.props.author} closeModal={this.onCloseModal} />
        </Modal>
        <input type="button" onClick={this.onOpenModal} value="Add New Book!" />
      </div>
    );
  }
}

export default AddBookModal;
