import Table from "react-bootstrap/Table";

function ARORequests() {
  return (
    <div className="arorequests">
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>#</th>
            <th>Current Serviced Requests</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Placeholder 1</td>
            <td>Incomplete 2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Placeholder 2</td>
            <td>Incomplete</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Placeholder 3</td>
            <td>Incomplete</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ARORequests;
