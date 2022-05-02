import React, { useState } from "react";
import CardModal from "./CardModal";

const EmployeeCard = ({ employee, currentUser }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      style={{
        marginBottom: "6px",
        border: "2px solid #000000",
        borderRadius: "12px",
        padding: 0,
        margin: "6px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h3 style={{ color: "#008080" }}>
        {employee.firstName} {employee.lastName}
      </h3>
      {currentUser === employee.email ? (
        <div style={{ color: "RED", margin: 0, padding: 0, fontWeight: 800 }}>
          THIS IS YOU!
        </div>
      ) : null}

      <div>{employee.role}</div>
      <div>
        <button
          className="btn-secondary"
          style={{ marginBottom: "4px" }}
          onClick={() => setShowModal(true)}
        >
          See More
        </button>
      </div>
      <CardModal show={showModal} onClose={() => setShowModal(false)}>
        {employee}
      </CardModal>
    </div>
  );
};

export default EmployeeCard;
