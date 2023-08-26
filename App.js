import React, { useState } from 'react';
import './App.css';

const mockScheduleData = [
  { id: 1, trainNumber: '', departure: '08:00 AM',from:'City B', destination: 'City A' },
  { id: 2, trainNumber: '', departure: '09:30 AM',from:'City A', destination: 'City B' },
  { id: 3, trainNumber: '', departure: '11:15 AM',from:'City A', destination: 'City C' },
  { id: 4, trainNumber: '', departure: '11:25 AM',from:'City C', destination: 'City B' },
  { id: 5, trainNumber: '', departure: '09:30 AM',from:'City C', destination: 'City A' },
  { id: 6, trainNumber: '', departure: '08:00 AM',from:'City B', destination: 'City C' },
  
  // Add more entries as needed
];

function App() {
  const [scheduleData, setScheduleData] = useState(mockScheduleData);

  return (
    <div className="App">
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure</th>
            <th>from</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((train) => (
            <tr key={train.id}>
              <td>{train.trainNumber}</td>
              <td>{train.departure}</td>
              <td>{train.from}</td>
              <td>{train.destination}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
