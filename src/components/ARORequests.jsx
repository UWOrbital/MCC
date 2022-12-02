import Table from "react-bootstrap/Table";
import React from "react";
import { db } from '../index';
import { useState, useEffect } from "react";




const ARORequests = () => {
  const [users,setUsers]=useState([])


  useEffect(async () => {
    const response=db.collection("users");
    const data=await response.get();
    console.log(data);
    data.docs.forEach(item=>{
     setUsers([...users,item.data()])
    })
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