import "./App.css";
import Dashboard from "./components/Dashboard";
import { DataProvider } from "./components/context";

function App() {
  return (
    <div>
      <DataProvider>
        <Dashboard />
      </DataProvider>
    </div>
  );
}

export default App;
