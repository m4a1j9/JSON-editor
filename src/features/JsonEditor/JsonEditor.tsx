import { memo } from "react";
import { useJSON } from "./hooks/useJSON";
import { Input } from "antd";
import { CODE_ID, TEXT_AREA_ID } from "./constants/primitives";

const { TextArea } = Input;

export const JsonEditor = memo(() => {
  const { formattedJSON, handleJSON, json } = useJSON();

  return (
    <>
      <TextArea
        rows={5}
        onChange={handleJSON}
        defaultValue={json}
        data-testid={TEXT_AREA_ID}
      />
      <pre
        style={{
          width: "100%",
          whiteSpace: "pre-wrap",
          overflow: "auto",
          textAlign: "left",
        }}
      >
        <code data-testid={CODE_ID}>{formattedJSON}</code>
      </pre>
    </>
  );
});
