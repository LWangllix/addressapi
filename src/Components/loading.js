import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

export default function loading() {
  return (
    <div
      style={{ height: "100vh", backgroundColor: "#b3b3b3" }}
      className="d-flex align-items-center justify-content-center"
    >
      <Spinner animation="border" />
    </div>
  );
}
