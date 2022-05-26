import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [valueOne, setValueOne] = useState(false);
  const [valueTwo, setValueTwo] = useState(false);

  return (
    <div className="App">
      <Switch
        id="input-checkbox-1"
        isOn={valueOne}
        handleToggle={() => setValueOne(!valueOne)}
        onBgColor="#039be5"
        size="sm"
      />

      <Switch
        id="input-checkbox-2"
        isOn={valueTwo}
        handleToggle={() => setValueTwo(!valueTwo)}
        onBgColor="#d81b60"
        size="md"
      />
    </div>
  );
}

export default App;
