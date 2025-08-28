import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MdEdit from 'react-icons'



const CollageInfo = () => {
    let data = [
    {
      year: "SY 2024-2025",
      status: "Active",
    },
    {
      year: "SY 2025-2026",
      status: "InAction",
    },
    {
      year: "SY 2026-2027",
      status: "Active",
    },
    {
      year: "SY 2025-2026",
      status: "InAction",
    }
  ];
  console.log(data);

  return (
    <>
      <div className="App" style={{ marginTop: "50px" }}>
        <h3 className="text-center mb-5">Collage Year Status</h3>
        <Table
          striped
          bordered
          hover
          style={{ width: "50%", margin: "0 auto" }}
        >
          <thead>
            <tr>
              <th>Collage Year</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((i,index) => {
              return (
                <tr key={index}>
                 <td>{i.year}</td>
                 <td ><Button   className="p-2" variant ={data.status === 'Active' ? 'primary' : 'secondary'}>{i.status}</Button></td>
                 <td><MdEdit /></td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
 
    </>
  )
}

export default CollageInfo
