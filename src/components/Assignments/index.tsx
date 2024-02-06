import { useState } from 'react';
import { Assignment } from '../Assignment';
import styles from './assignments.module.css';

function countCompletedAssignments(assignments) {
  if (assignments.length === 0) {
    return 0;
  }

  return assignments.reduce(
    (total, value) => (value.completed ? total + 1 : total),
    0
  );
}

export function Assignments({ assignments, onUpdateAssignmentsList }) {
  const [completedAssignments, setCompletedAssignments] = useState(
    countCompletedAssignments(assignments)
  );

  const assignmentDeleteHandler = (id) => {
    const newAssignmentsList = assignments.filter((a) => a.id !== id);
    onUpdateAssignmentsList(newAssignmentsList);
    setCompletedAssignments(countCompletedAssignments(newAssignmentsList));
  };

  const assignmentStatusChangeHandler = ({ id, completed }) => {
    const clonedAssignment = [...assignments];
    const updatingAssignmentIndex = clonedAssignment.findIndex(
      (a) => a.id === id
    );
    clonedAssignment[updatingAssignmentIndex].completed = completed;
    onUpdateAssignmentsList(clonedAssignment);
    setCompletedAssignments(countCompletedAssignments(assignments));
  };

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {completedAssignments} of {assignments.length}
          </span>
        </div>
      </header>

      <ul className={styles.list}>
        {assignments &&
          assignments.map((a) => (
            <li key={a.id}>
              <Assignment
                details={a}
                onStatusChange={assignmentStatusChangeHandler}
                onDelete={assignmentDeleteHandler}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
