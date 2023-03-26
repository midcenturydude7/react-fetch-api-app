import React from "react";
import Form from "./components/Form";
import ContentList from "./components/ContentList";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";

  const [reqType, setReqType] = React.useState("users");
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <h1 className="header-title">React | Fetch API App</h1>
      <Form reqType={reqType} setReqType={setReqType} />
      <ContentList items={items} />
    </div>
  );
}

export default App;
