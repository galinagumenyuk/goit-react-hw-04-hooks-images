import { useEffect} from "react";
import { Modal, Overlay } from "./Modal.styled";

export default function ModalWindow({ onClose, filteredResults}) {

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
    onClose();
    }
  };

   const handleKeydown = (e) => {
    if (e.code === "Escape") {
    onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {window.removeEventListener("keydown",handleKeydown)}
  })

    return (
      <Overlay onClick={handleBackdropClick}>
        <Modal>
          <img
            src={filteredResults.largeImageURL}
            alt={filteredResults.tags}
          />
        </Modal>
      </Overlay>
    );
}


