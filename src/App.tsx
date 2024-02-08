import { Header } from './components/Header';
import { Assignments } from './components/Assignments';
import { useState } from 'react';
import { AssignmentInfo } from './types';

function App() {
  const [assignmentList, updateAssignmentsList] = useState<AssignmentInfo[]>(
    []
  );

  const onAssignmentCreateHandler = (newAssignment: AssignmentInfo) => {
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
