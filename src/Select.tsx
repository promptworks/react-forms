import * as React from "react";
import { Field } from "./Field";
import { SelectProps, OptionProps } from "./types";

const getOptionProps = (option: OptionProps | string) => {
  if (typeof option === "string") {
    return { value: option, key: option, children: option };
  }

  const { value, label = value, key = value, ...props } = option;
  return { value, key, children: label, ...props };
};

/**
 * An HTML `<select />`, but with the following benefits:
 *
 *   * It accepts `null` as a value.
 *   * It accepts a `placeholder`.
 *   * It allows you to pass in an array of options.
 */
export const Select: React.FC<SelectProps> = ({
  onChange,
  options = [],
  placeholder,
  value,
  ...props
}) => {
  const handleChange = React.useCallback(
    event => onChange(event.target.value),
    [onChange]
  );

  return (
    <Field
      render={inputProps => (
        <select
          value={value === null ? "" : value}
          onChange={handleChange}
          {...inputProps}
        >
          {placeholder && (
            <option disabled value="" key="placeholder">
              {placeholder}
            </option>
          )}

          {options.map(option => (
            <option {...getOptionProps(option)} />
          ))}
        </select>
      )}
      {...props}
    />
  );
};
