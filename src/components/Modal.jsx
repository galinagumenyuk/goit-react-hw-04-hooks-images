import React from "react";
import { Modal, Overlay } from "./Modal.styled";

class ModalWindow extends React.Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <img
            src={this.props.filteredResults.largeImageURL}
            alt={this.props.filteredResults.tags}
          />
        </Modal>
      </Overlay>
    );
  }
}

export default ModalWindow;
