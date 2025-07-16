import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as THREE from "three";

import { Parser } from "hot-formula-parser";

function App() {
  console.log("THREE version:", THREE.REVISION);
  const parser = new Parser();
  const result = parser.parse("SUM(1, 2, 3)");
  console.log("Formula result:", result.result);

  const [count, setCount] = useState(0);
  const color = new THREE.Color(0x00ff00);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Color: {color.getHexString()}</h2>
      <h2>THREE.VERSION: {THREE.REVISION}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
