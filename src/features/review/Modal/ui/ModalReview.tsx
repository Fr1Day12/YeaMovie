import { useState } from "react";
import * as classes from "./classes.module.scss";
import ReactDOM from "react-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: ({
    author,
    description,
    type,
  }: {
    author: string;
    description: string;
    type: string;
  }) => void;
}
const ModalReview = ({ isOpen, onClose, onSubmit }: Props) => {
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let typeString: string;
    if (type >= 8 && type <= 10) {
      typeString = "POSITIVE";
    } else if (type >= 4 && type <= 7) {
      typeString = "NEGATIVE";
    } else {
      typeString = "NEUTRAL";
    }

    onSubmit({ author, description, type: typeString });
    setDescription("");
    setAuthor("");
    setType(0);
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={classes.modalOverlay} onClick={handleOverlayClick}>
      <div className={classes.modalContent}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="comment">Comment:</label>
            <textarea
              id="comment"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required></textarea>
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              value={type}
              onChange={(e) => setType(Number(e.target.value))}
              min="0"
              max="10"
              required
            />
          </div>
          <div className={classes.modalActions}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalReview;
