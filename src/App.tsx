import { Header } from './components/Header';
import { Assignments } from './components/Assignments';
import { useState } from 'react';

function App() {
  const [assignmentList, updateAssignmentsList] = useState([]);

  const onAssignmentCreateHandler = (newAssignment) => {
    updateAssignmentsList([newAssignment, ...assignmentList]);
  };

  return (
    <>
      <Header onAssignmentCreate={onAssignmentCreateHandler} />
      <Assignments
        assignments={assignmentList}
        onUpdateAssignmentsList={updateAssignmentsList}
      />
    </>
  );
}

export default App;
