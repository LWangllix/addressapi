import React, { useState, useEffect } from "react";
import Loading from "./Components/loading";
import Content from "./Components/content";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [apiAdressData, setapiAdressData] = useState(null);

  useEffect(() => {
    const loadInitialData = async () => {
      setapiAdressData(
        await (
          await fetch(
            "https://random-data-api.com/api/address/random_address?size=100"
          )
        ).json()
      );
    };
    loadInitialData();
  }, []);

  return (
    <div>
      {apiAdressData == null ? <Loading /> : <Content data={apiAdressData} />}
    </div>
  );
}

export default App;
