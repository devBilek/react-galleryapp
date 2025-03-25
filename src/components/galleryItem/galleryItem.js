import React from "react";
import ReactModal from "react-modal";
import { useEffect } from "react";
import "./galleryItem.css";

export default function GalleryItem({ item, filterTag }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    modalIsOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalIsOpen]);

  return item.tags.includes(filterTag) || filterTag === 0 ? (
    <li className="m-1" id="galleryItem">
      <img src={item.webformatURL} alt="fighterPhoto" onClick={openModal} />

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal d-flex flex-column align-items-center justify-content-center"
        overlayClassName="overlay"
      >
        <img
          src={item.largeImageURL}
          alt="popup"
          style={{ maxWidth: "100%", maxHeight: "80vh" }}
        />
        <button onClick={closeModal} className="btn btn-danger mt-2">
          Close
        </button>
      </ReactModal>
    </li>
  ) : null;
}
