import React from "react"

function Student(props) {
    return (
        <div>
            {/* Each students info will be displayed here */}
            {props.student.name}
            {props.student.course}
            {/* This button will remove the student from the student array from the 
            (we are modifying data on the parent from the child by running this function there for getting data back up the dataflow) */}
            <button onClick={() => props.removeStudent(props.index)}>Delete</button>
            <hr />
        </div>
    )
}

export default Student