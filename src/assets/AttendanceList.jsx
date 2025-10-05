import React from "react";
import StudentCard from "./StudentCard";

function AttendanceList({ students }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          rollNo={student.rollNo}
          attendance={student.attendance}
        >
          {/* Using children prop for extra messages */}
          {student.attendance < 50 && (
            <p style={{ color: "orange", fontWeight: "bold" }}>
              ⚠ Warning: Low Attendance
            </p>
          )}
          {student.attendance > 90 && (
            <p style={{ color: "blue", fontWeight: "bold" }}>
              ⭐ Excellent Student
            </p>
          )}
        </StudentCard>
      ))}
    </div>
  );
}

export default AttendanceList;
