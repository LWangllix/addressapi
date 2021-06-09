import React from "react";
import { Button } from "react-bootstrap";

export default function Pages({ size, handleDistance }) {
  function pagess() {
    let a = [];
    
    for (let i = 1; i <= size; i++) {
      a.push(
        <Button
          key={i}
          style={{ margin: 4 }}
          onClick={() => handleDistance({ from: (i - 1) * 10, to: i * 10 })}
          variant="primary"
        >
          {i}
        </Button>
      );
    }
    return a;
  }

  return (
    <div className="mx-auto my-5" style={{ width: "75%", textAlign: "center" }}>
      {pagess()}
    </div>
  );
}
