import React from "react";

function StudentCard({ name, rollNo, attendance, children }) {
  const attendanceStyle = {
    color: attendance > 75 ? "green" : "red",
    fontWeight: "bold"
  };

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p style={attendanceStyle}>Attendance: {attendance}%</p>

      {/* children prop for custom messages */}
      <div className="mt-2">{children}</div>
    </div>
  );
}

export default StudentCard;
