import { memo } from "react";
import { useJSON } from "./hooks/useJSON";
import { Input } from 'antd';

const { TextArea } = Input;

export const JsonEditor = memo(() => {
  const { formattedJSON, handleJSON, json } = useJSON();

  return (
    <>
      <TextArea
        rows={5}
        onChange={handleJSON}
        defaultValue={json}
      />
      <pre
        style={{
          width: "100%",
          whiteSpace: "pre-wrap",
          overflow: "auto",
          textAlign: "left",
        }}
      >
        <code>{formattedJSON}</code>
      </pre>
    </>
  );
});
