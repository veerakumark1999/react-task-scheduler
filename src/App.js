import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("to-do-list"))
  );

  //get new task from user
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (task) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNew = { id, checked: false, task };
    const listItems = [...items, addNew];
    setItems(listItems);
    localStorage.setItem("to-do-list", JSON.stringify(listItems));
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("to-do-list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const list = items.filter((i) => i.id !== id);
    setItems(list);
    localStorage.setItem("to-do-list", JSON.stringify(list));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div className="App">
      <Header title={"TASK SCHEDULER"} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter(
          (item) =>
            item &&
            item.task &&
            item.task.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
