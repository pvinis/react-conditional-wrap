import { useState } from "react";
import { Wrap } from "../..";

export function App() {
  const [condition, setCondition] = useState(true);

  return (
    <>
      <h1>Example</h1>
      <div>
        <p>Condition is: {condition ? "true" : "false"}</p>
        <button onClick={() => setCondition((c) => !c)}>
          Toggle condition
        </button>

        <Wrap if={condition}>
          <div style={{ backgroundColor: "pink" }}>
            <Wrap.Content>
              <p>Wrap content</p>
            </Wrap.Content>
          </div>
        </Wrap>
      </div>
    </>
  );
}
