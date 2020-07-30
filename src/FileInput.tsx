import * as React from "react";
import { Field } from "./Field";
import { FormField } from "@stackup/form";
import { useBlur, getLabelledBy, getClassName } from "./utilities";
import { SharedFieldProps, FieldSize } from "./types";

export interface FileInputProps extends SharedFieldProps {
  field: FormField<File | null>;
  size?: FieldSize;
  inline?: boolean;
  condensed?: boolean;
  innerRef?: React.Ref<HTMLInputElement>;
  inputClassName?: string;
}

export function FileInput(props: FileInputProps) {
  const { field, innerRef } = props;
  const { id, setValue } = field;

  const onBlur = useBlur(field);
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.files?.[0] || null);
    },
    [setValue]
  );

  return (
    <Field variant="file" {...props}>
      <input
        type="file"
        id={id}
        ref={innerRef}
        onBlur={onBlur}
        onChange={onChange}
        aria-labelledby={getLabelledBy(field)}
        className={getClassName(
          props,
          "field__input",
          "field__input--file",
          props.inputClassName
        )}
      />
    </Field>
  );
}
