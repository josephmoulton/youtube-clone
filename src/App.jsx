import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Recommended from "./Components/Recommended";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <Recommended />
      </div>
      {/* Recommended */}
    </div>
  );
}

export default App;
