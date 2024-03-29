import styles from './assignment.module.css';
import { TbTrash } from 'react-icons/tb';
import {} from 'react-icons';
import { useState } from 'react';
import { AssignmentInfo } from '../../types';

type AssignmentProps = {
  assignment: AssignmentInfo;
  onStatusChange: (e: { id: number; completed: boolean }) => void;
  onDelete: (id: number) => void;
};

export function Assignment({
  assignment,
  onStatusChange,
  onDelete,
}: AssignmentProps) {
  const [completed, setCompleted] = useState(assignment.completed);

  const updateAssignmentStatus = () => {
    const newStatus = !completed;
    setCompleted(newStatus);
    onStatusChange({ id: assignment.id, completed: newStatus });
  };

  return (
    <div className={styles.assignment}>
      <button
        className={styles.checkContainer}
        onClick={updateAssignmentStatus}
      >
        {completed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        ) : (
          <div />
        )}
      </button>

      <p className={completed ? styles.textCompleted : ''}>
        {assignment.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(assignment.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
