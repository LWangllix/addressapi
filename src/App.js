import React, { useState, useEffect } from "react";
import Loading from "./Components/loading";
import Content from "./Components/content";
import "bootstrap/dist/css/bootstrap.min.css";

let apiAdressData = [];
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true);

      apiAdressData = await (
        await fetch(
          "https://random-data-api.com/api/address/random_address?size=100"
        )
      ).json();
      console.log(apiAdressData);

      setLoading(false);
    };
    loadInitialData();
  }, []);

  return <div>{loading ? <Loading /> : <Content data={apiAdressData} />}</div>;
}

export default App;
