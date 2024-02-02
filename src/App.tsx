import { Header } from './components/Header';
import { Assignments } from './components/Assignments';
import { useState } from 'react';

function App() {
  const defaultAssignment = [
    {
      id: Date.now(),
      title: '111',
      completed: false,
    },
    {
      id: Date.now() + 1,
      title: '222',
      completed: true,
    },
  ];
  const [assignments, updateAssignments] = useState(defaultAssignment);

  return (
    <>
      <Header newAssignmentHandler={updateAssignments} />
      <Assignments assignments={assignments} />
    </>
  );
}

export default App;
