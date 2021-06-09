import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";


export default function search({
  handleCity,
  handleStreetName,
  handlePostCode,
}) {
    
  return (
    


    <div>
      <Form  className="mx-auto py-5 px-5 my-5" style={{ width: "75%", boxShadow:"1px 1px 10px 1px", borderRadius:"10px" }}>
      
        <Form.Row id="formmm">
          <Form.Group as={Col} controlId="city">
            <Form.Label style={{ fontWeight: "bold" }}>City</Form.Label>
            <Form.Control
              onChange={(e) => handleCity(e.target.value, e.target.id)}
              type="text"
              placeholder="Enter City"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="street_name">
            <Form.Label style={{ fontWeight: "bold" }}>street name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter street name"
              onChange={(e) => handleStreetName(e.target.value, e.target.id)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="postcode">
            <Form.Label style={{ fontWeight: "bold" }}>Post Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter post code"
              onChange={(e) => handlePostCode(e.target.value, e.target.id)}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
}
