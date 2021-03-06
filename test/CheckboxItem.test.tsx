import * as React from "react";
import { CheckboxItem, CheckboxItemProps } from "../src";
import { render, fireEvent } from "@testing-library/react";
import { make } from "./helpers";
import {
  includeFieldTests,
  includeLabelTests,
  includeHelpTests
} from "./sharedExamples";

function setup(props: Partial<CheckboxItemProps<number>> = {}) {
  return render(
    <CheckboxItem
      label="Example"
      field={make<number[]>([])}
      value={100}
      {...props}
    />
  );
}

describe("<CheckboxItem />", () => {
  includeFieldTests<number[]>([], setup);
  includeLabelTests<number[]>([], setup);
  includeHelpTests<number[]>([], setup);

  it("is a checkbox", () => {
    const { getByRole } = setup();
    const input = getByRole("checkbox");
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).not.toBeChecked();
  });

  it("respects `value` for checked", () => {
    const field = make<number[]>([100]);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");
    expect(input).toBeChecked();
  });

  it("respects `value` for unchecked", () => {
    const field = make<number[]>([]);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");
    expect(input).not.toBeChecked();
  });

  it("changes the value", () => {
    const field = make<number[]>([]);
    const { getByRole } = setup({ field });
    const input = getByRole("checkbox");

    fireEvent.click(input);
    expect(field.setValue).toHaveBeenCalled();
  });

  it("does not display errors", () => {
    const field = make<number[]>([], { error: "Error", touched: true });
    const { container } = setup({ field });
    expect(container).not.toHaveTextContent("Error");
  });
});
