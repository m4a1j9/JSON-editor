import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JsonEditor } from "../JsonEditor";
import { CODE_ID, ERROR, LS_JSON, TEXT_AREA_ID } from "../constants/primitives";

describe("JSON Editor JsonEditor", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("renders the JSON editor UI", () => {
    render(<JsonEditor />);
    expect(screen.getByTestId(TEXT_AREA_ID)).toBeInTheDocument();
  });

  test("displays an error message for invalid JSON", () => {
    render(<JsonEditor />);
    const textArea = screen.getByTestId(TEXT_AREA_ID);
    fireEvent.change(textArea, { target: { value: "invalid json" } });

    expect(screen.getByTestId(CODE_ID).textContent === ERROR);
  });

  test("validates and parses valid JSON", () => {
    render(<JsonEditor />);
    const textArea = screen.getByTestId(TEXT_AREA_ID);
    const VALID_JSON = '{"key": "value"}';

    fireEvent.change(textArea, { target: { value: VALID_JSON } });

    expect(screen.getByTestId(CODE_ID).textContent === VALID_JSON);
  });

  test("restores data from localStorage on page reload", () => {
    const SAVED_JSON = '{"key": "value"}';
    localStorage.setItem(LS_JSON, SAVED_JSON);

    render(<JsonEditor />);
    const textArea = screen.getByTestId(TEXT_AREA_ID) as HTMLInputElement;

    expect(textArea.value).toBe(SAVED_JSON);
  });
});
