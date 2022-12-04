import Table from "react-bootstrap/Table";
import { db } from '../index';
import { useState, useEffect } from "react";




const ARORequests = () => {
  const [users,setUsers]=useState([])


  useEffect(() => {
    const response=db.collection("users");
    console.log(response);
    response.get().then((data) => {
      console.log(data);
      const users=data.docs.map((doc) => doc.data());
      setUsers(users);
    }).catch((error) => {
      console.log(error);
    });
  });



  return (
    <div className="arorequests layout">
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
            <td>Placeholder</td>
            <td>Incomplete</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Placeholder</td>
            <td>Incomplete</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Placeholder</td>
            <td>Incomplete</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ARORequests;