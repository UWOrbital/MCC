import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

function MissionCommands() {
  return (
    <div className="missionCommands layout">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          Enter Command
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
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
