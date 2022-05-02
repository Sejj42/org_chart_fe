import { useState, useEffect } from "react";
import reactDom from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "@/styles/CardModal.module.css";

const CardModal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true), []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>
          <div>
            <span className={styles.infoItem}>Full Name: </span>
            {children.firstName} {children.lastName}
          </div>
          <div>
            <span className={styles.infoItem}>Employee ID: </span>
            {children.id}
          </div>
          <div>
            <span className={styles.infoItem}> Email: </span>
            {children.email}
          </div>
          <div>
            <span className={styles.infoItem}> Password: </span>
            {children.password}
          </div>
          <div>
            <span className={styles.infoItem}>Direct Manager ID: </span>
            {children.managerId || "N/A"}
          </div>
          <div>
            <span className={styles.infoItem}>Role: </span>
            {children.role}
          </div>
          <div>
            <span className={styles.infoItem}>Start Date: </span>
            {children.startDate}
          </div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return reactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default CardModal;
