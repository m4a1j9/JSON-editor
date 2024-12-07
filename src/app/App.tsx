import { memo } from "react";
import "./App.css";
import { JsonEditor } from "@features/JsonEditor";

const App = memo(() => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        width: "100%",
        height: "500px",
      }}
    >
      <JsonEditor />
    </section>
  );
});

export default App;
