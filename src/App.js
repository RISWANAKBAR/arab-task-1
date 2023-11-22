import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Mainpage from "./Components/Mainpage";

function App() {
  return (
    <div className="App bg-lightblue">
      <div className="flex h-screen">
        <Sidebar />
        <Mainpage />
      </div>
    </div>
  );
}

export default App;
