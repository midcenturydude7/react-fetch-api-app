import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const API_USERS = "https://jsonplaceholder.typicode.com/users";

  // const [users, setUsers] = React.useState([]);

  function getUsers() {
    fetch(API_USERS)
      .then((response) => response.json())
      .then((data) => {
        data.map((user) => <l1>{user}</l1>);
      });
  }

  // React.useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch(API_USERS);
  //       if (!response.ok) throw Error("Did not receive expected data");
  //       const userList = await response.json;
  //       console.log(JSON.stringify(userList));
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div className="App">
      <h1 className="header-title">React | Fetch API App</h1>
      <Header getUsers={getUsers} />
      <Content />
    </div>
  );
}

export default App;
