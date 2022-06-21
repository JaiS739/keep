import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import { useState } from "react";

function App() {
  const [addData, setaddData] = useState([]);

  let handleSubmit = (note) => {
    setaddData([...addData, note]);
  };

  let onDelete = (id) => {
    alert("hello");
    let updatedData = addData.filter((e, index) => index !== id);
    setaddData(updatedData);
  };

  return (
    <div className="App">
      <Header />
      <CreateNote handleSubmit={handleSubmit} />

      {addData.map((e, index) => (
        <Notes id={index} onDelete={onDelete} key={index} finalData={e} />
      ))}
    </div>
  );
}

export default App;
