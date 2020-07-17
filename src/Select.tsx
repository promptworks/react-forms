import * as React from "react";
import { HTMLProps } from "./utilities";
import { useConfig, Config } from "./useConfig";
import { useField, FieldProps } from "./useField";

export interface SelectProps extends FieldProps, HTMLProps<HTMLSelectElement> {
  value?: string;
  onChangeValue?: (value: string) => void;
  placeholder?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  children?: React.ReactNode;
}

export function createSelect<T>(config: Config<SelectProps, T>) {
  return function Select(props: SelectProps & T) {
    const {
      value,
      onChange,
      onChangeValue,
      placeholder,
      append,
      prepend,
      children,
      ...otherProps
    } = useConfig(config, props);

    const field = useField(otherProps);
    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(event);
        onChangeValue && onChangeValue(event.target.value);
      },
      [onChange, onChangeValue]
    );

    return (
      <div {...field.getFieldProps()}>
        {field.label && (
          <label {...field.getLabelProps()}>
            {field.label}
            {field.help && <span {...field.getHelpProps()}>{field.help}</span>}
          </label>
        )}
        {prepend}
        <select
          value={value}
          onChange={handleChange}
          {...field.getInputProps()}
        >
          {placeholder && (
            <option disabled value="" key="placeholder">
              {placeholder}
            </option>
          )}

          {children}
        </select>
        {append}
        {field.error && <span {...field.getErrorProps()}>{field.error}</span>}
      </div>
    );
  };
}

export const Select = createSelect({});
