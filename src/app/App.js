import Header from "../components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "../components/Dashboard/Dashboard";
import Comments from "../components/Comments/Comments";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Routes>
       <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
