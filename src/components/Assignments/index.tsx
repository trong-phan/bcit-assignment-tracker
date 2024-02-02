import { useState } from 'react';
import { Assignment } from '../Assignment';
import styles from './assignments.module.css';

export function Assignments({ assignments }) {
  const initialCompletedAssignments = assignments.reduce(
    (total, value) => (value.completed ? total + 1 : total),
    0
  );

  const [completedAssignments, setCompletedAssignments] = useState(
    initialCompletedAssignments
  );

  const assignmentStatusChangeHandler = ({ id, completed }) => {
    console.log({ id, completed });
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
              />
            </li>
          ))}
      </ul>
    </section>
  );
}
