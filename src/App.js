import './App.css';
import Student from './components/Student';
import { useState } from 'react';
import data from './data';


function App() {

  // function getStudent() {
  //   const studentData = data;
  //   studentData.forEach(student => {
  //     console.log(student);
  //   });
  // }
  // getStudent();

  const [students, setStudents] = useState(data);
  
  return (
    <div className="App">
      <h1>React Students</h1>

      { students ?
        (students.map((student) => <Student student={student} />)) :
        <h3>No stutdents found.</h3>
      }
    </div>
  );
}

export default App;
