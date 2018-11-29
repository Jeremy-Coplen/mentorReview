import React, { Component } from 'react';

import Student from "./Student"

class App extends Component {
  constructor() {
    super()

    this.state = {
      // Array of students
      students: [
        {
        name: "Jeremy Coplen",
        course: "Web Development",
      },
      {
      name: "Beth Telford",
      course: "Web Development"
      },
    {
      name: "Todd Rasband",
      course: "Web Development"
    }
  ]
    }
    this.removeStudent = this.removeStudent.bind(this)
  }

  // Function to pass down to child to modify data back up the dataflow
  removeStudent(index) {
    // State is immutable so we need to do a set state with a new array with the student spliced out
    let array = this.state.students

    array.splice(index, 1)

    this.setState({
      students: array
    })
  }

  render() {
    // Mapping over students array on state to display each students info
    const students = this.state.students.map((student, i) => {
      return (
        // Rendering a Student for each student in the students array on state passing the whole object as a prop and the index as a prop
        <Student key={i} student={student} index={i} removeStudent={this.removeStudent}/>
      )
    })
    return (
      <div className="App">
      <h1>Web Development Students:</h1>
      {/* This is the new students array that is now jsx for each student */}
      {students}
      </div>
    );
  }
}

export default App;
