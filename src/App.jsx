import React from "react";
import AttendanceList from "./assets/AttendanceList";

function App() {
  const students = [
    { id: 1, name: "Sowmya", rollNo: "101", attendance: 95 },
    { id: 2, name: "Sasi", rollNo: "102", attendance: 82 },
    { id: 3, name: "Aishwarya", rollNo: "103", attendance: 48 },
    { id: 4, name: "Ravi", rollNo: "104", attendance: 70 }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Student Attendance Dashboard</h1>
      <AttendanceList students={students} />
    </div>
  );
}

export default App;

