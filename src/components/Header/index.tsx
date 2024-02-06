import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { uppercase } from '../../helpers/stringHelpers';
import { useRef, useState } from 'react';

export function Header({ onAssignmentCreate }) {
  const assignmentInput = useRef('');

  const [createButtonDisabled, setCreateButtonDisabled] = useState(true);

  const onNewAssignmentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      setCreateButtonDisabled(false);
    } else {
      setCreateButtonDisabled(true);
    }
  };

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newAssignment = {
      id: Date.now(),
      title: assignmentInput.current.value,
      completed: false,
    };

    onAssignmentCreate(newAssignment);

    // Reset input & create button state
    assignmentInput.current.value = '';
    setCreateButtonDisabled(true);
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase('bcit')} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={formSubmitHandler}>
        <input
          ref={assignmentInput}
          name="assignment-title"
          placeholder="Add an assignment, at least 3 characters length"
          type="text"
          onChange={onNewAssignmentInput}
        />
        <button disabled={createButtonDisabled} type="submit">
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
