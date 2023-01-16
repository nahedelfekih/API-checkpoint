import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersList from "./UsersList";

function App() {
  const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
     
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="App">
      {data.map((users) => {
        return <UsersList key={users.name} users={users} />;
      })}
    </div>
  );
}

export default App;
