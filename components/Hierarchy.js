import AuthContext from "@/context/AuthContext";
import React, { useContext } from "react";
import EmployeeCard from "./EmployeeCard";
import styles from "@/styles/Hierarchy.module.css";

const Hierarchy = ({ topTier, midTier, lowTier }) => {
  const { user } = useContext(AuthContext);
  const renderedTop = topTier.map((employee) => {
    return (
      <EmployeeCard currentUser={user} employee={employee} key={employee.id} />
    );
  });
  const renderedRnDTop = midTier.map((employee) => {
    if (employee.role === "RnD Manager")
      return (
        <EmployeeCard
          currentUser={user}
          employee={employee}
          key={employee.id}
        />
      );
  });
  const renderedRnDBottom = lowTier.map((employee) => {
    if (employee.managerId === 3)
      return (
        <EmployeeCard
          currentUser={user}
          employee={employee}
          key={employee.id}
        />
      );
  });
  const renderedQATop = midTier.map((employee) => {
    if (employee.role === "QA Manager")
      return (
        <EmployeeCard
          currentUser={user}
          employee={employee}
          key={employee.id}
        />
      );
  });
  const renderedQABottom = lowTier.map((employee) => {
    if (employee.managerId === 2)
      return (
        <EmployeeCard
          currentUser={user}
          employee={employee}
          key={employee.id}
        />
      );
  });
  const renderedSalesTop = midTier.map((employee) => {
    if (employee.role === "Sales")
      return (
        <EmployeeCard
          currentUser={user}
          employee={employee}
          key={employee.id}
        />
      );
  });

  return (
    <div>
      <h1 style={{ margin: 0 }}>The Comp Chart</h1>
      <div className={styles.root}>{renderedTop}</div>
      <div className={styles.midAndLowTier}>
        <div className={styles.RnD}>
          <div className={styles.top}>{renderedRnDTop}</div>
          <div className={styles.bottom}>{renderedRnDBottom}</div>
        </div>
        <div className={styles.QA}>
          <div className={styles.top}>{renderedQATop}</div>
          <div className={styles.bottom}>{renderedQABottom}</div>
        </div>
        <div className={styles.sales}>
          <div className={styles.top}>{renderedSalesTop}</div>
        </div>
      </div>
    </div>
  );
};

export default Hierarchy;
