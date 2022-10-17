import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import "react-toastify/dist/ReactToastify.css";
import Todo from "./pages/Todo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
