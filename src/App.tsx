import { useState } from "react";
import "./App.css";
import Switch from "./components/Switch";

function App() {
  const [valueOne, setValueOne] = useState(false);
  const [valueTwo, setValueTwo] = useState(false);
  const [valueThree, setValueThree] = useState(false);

  return (
    <div className="App">
      <div>
        <Switch
          id="input-checkbox-1"
          isOn={valueOne}
          handleToggle={() => setValueOne(!valueOne)}
          onBgColor="#039be5"
          size="sm"
        />
        <p>
          Size: <b>sm</b>
        </p>
      </div>

      <div>
        <Switch
          id="input-checkbox-2"
          isOn={valueTwo}
          handleToggle={() => setValueTwo(!valueTwo)}
          onBgColor="#d81b60"
          size="md"
        />
        <p>
          Size: <b>md</b>
        </p>
      </div>

      <div>
        <Switch
          id="input-checkbox-3"
          isOn={valueThree}
          handleToggle={() => setValueThree(!valueThree)}
          onBgColor="#43a047"
          size="lg"
        />
        <p>
          Size: <b>lg</b>
        </p>
      </div>
    </div>
  );
}

export default App;
