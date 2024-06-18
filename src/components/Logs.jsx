import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function LogItem({ id }) {
  const [date, setDate] = useState(Date.now());
  const [log, setLog] = useState("");
  const [loading, setLoading] = useState(true)

  const fetchLogData = async () => {
    const response = await fetch(`http://localhost:5000/recent-logs/${id}`);
    const data = await response.json();
    setDate(data.date);
    setLog(data.log);
    setLoading(false);
  }

  useEffect(() => {
    fetchLogData()
    setInterval(fetchLogData, 10000)
  }, []);

  return (
    <tr key={date}>
      {loading ? <td key={`${id}loading`}>Loading...</td> : <>
        <td key={`${date}Date`}>{date}</td>
        <td key={`${date}Log`} >{log}</td > </>}
    </tr >
  );
}

function Logs() {
  const count = 5;
  return (
    <div className="logs layout">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Time</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>{[...Array(count).keys()].map(key => <LogItem id={key} />)}</tbody>
      </Table>
    </div>
  );
}

export default Logs;
