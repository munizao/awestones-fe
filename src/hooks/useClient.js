import { useState, useEffect } from 'react';
import * as Colyseus from "colyseus.js";

const useClient = () => {
  const [client, setClient] = useState();

  useEffect(() => {
    console.log("useClient useEffect");
    if (!client) {
      // use current hostname/port as colyseus server endpoint
      const location = window.location;
      let endpoint = location.protocol.replace("http", "ws") + "//" + location.hostname;

      // development server
      if (location.port && location.port !== "80") { endpoint += ":2567" }

      setClient(new Colyseus.Client(endpoint));
    }        
  }, [client]);

  return client;
}

export default useClient;