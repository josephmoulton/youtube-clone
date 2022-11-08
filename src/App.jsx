import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Recommended from "./Components/Recommended";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import SearchPage from "./Pages/SearchPage";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <Recommended />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
