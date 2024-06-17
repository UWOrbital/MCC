import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useState } from "react";

function MissionCommands() {
  const [commands, setCommands] = useState('');


  const handleChange = (event) => {
    setCommands(event.target.value);
    console.log(event.target.value);
  }

  const handleCommand = () => {
    console.log("Command submitted");
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: commands })
    };
    fetch('http://localhost:5000/mission-control', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="missionCommands layout">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm" onClick={handleCommand}>
          Enter Command
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          onChange={handleChange}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Placeholder</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MissionCommands;
