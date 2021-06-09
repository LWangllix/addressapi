import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button } from "react-bootstrap";
import Pages from "./pages";

export default function DataTable({ filteredArr,handleDistance, distance }) {
  const size = Math.ceil(filteredArr.length / 10);



  function redirectToGoogle(latitude, longitude) {
    window.location.href = `http://maps.google.com/maps?q=${latitude},${longitude}`;
  }

  return (
    <div>
      <Table
        className="mx-auto my-5"
        style={{ width: "75%" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>id</th>
            <th>City</th>
            <th>street name</th>
            <th>Post Code</th>
            <th style={{ textAlign: "center" }}>Location on google</th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.slice(distance.from, distance.to).map((e) => {
            return (
              <tr key={e.uid}>
                <td>{e.id}</td>
                <td>{e.city}</td>
                <td>{e.street_name}</td>
                <td>{e.postcode}</td>
                <td style={{ textAlign: "center" }}>
                  <Button
                    onClick={() => redirectToGoogle(e.latitude, e.longitude)}
                    variant="success"
                  >
                    Location
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Pages size={size} handleDistance={handleDistance} />
    </div>
  );
}
