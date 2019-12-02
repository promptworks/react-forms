import * as React from "react";
import { Formik, Form } from "formik";
import { initialValues, notBlank, telephoneMask } from "./helpers";
import {
  bootstrapTheme,
  Checkbox,
  CheckboxList,
  DateInput,
  DateTimeInput,
  FileInput,
  FileListInput,
  FloatInput,
  Input,
  IntegerInput,
  MaskedInput,
  RadioGroup,
  Select,
  TextArea,
  ToggleButton,
  ThemeProvider,
  TimeInput,
  SubmitButton
} from "formik-inputs";

export const FormikInputs = () => {
  return (
    <ThemeProvider value={bootstrapTheme}>
      <section>
        <h2 className="mb-4">formik-inputs</h2>

        <Formik
          initialValues={initialValues}
          onSubmit={values => console.table(values)}
        >
          <Form noValidate>
            <div className="row">
              <div className="col">
                <Input required name="text" label="Text" validate={notBlank} />
              </div>

              <div className="col">
                <IntegerInput label="Integer" name="integer" />
              </div>

              <div className="col">
                <FloatInput label="Float" name="float" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <DateInput label="Date" name="date" />
              </div>

              <div className="col">
                <TimeInput label="Time" name="time" />
              </div>

              <div className="col">
                <DateTimeInput label="DateTime" name="datetime" />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-4">
                <Select
                  name="select"
                  label="Select"
                  options={["One", "Two", "Three"]}
                />
              </div>

              <div className="col-4">
                <MaskedInput
                  label="Masked"
                  name="masked"
                  showMask
                  mask={telephoneMask}
                />
              </div>
            </div>

            <div className="row mt-3 mb-2">
              <div className="col">
                <FileInput label="File" name="file" />
              </div>

              <div className="col">
                <FileListInput label="FileList" name="filelist" />
              </div>
            </div>

            <TextArea label="TextArea" name="textarea" />

            <div className="row mt-2">
              <div className="col">
                <Checkbox label="Checkbox" name="checkbox" />
              </div>

              <div className="col">
                <ToggleButton label="Toggle" name="toggle" />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col">
                <CheckboxList
                  legend="Checkbox List"
                  name="checkboxList"
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Disabled", value: "buzz", disabled: true }
                  ]}
                />
              </div>

              <div className="col">
                <RadioGroup
                  required
                  legend="Radio Group"
                  name="radioGroup"
                  validate={notBlank}
                  options={[
                    { label: "Foo", value: "foo" },
                    { label: "Bar", value: "bar" },
                    { label: "Disabled", value: "buzz", disabled: true }
                  ]}
                />
              </div>
            </div>

            <SubmitButton className="btn btn-primary mt-2 float-right" />
          </Form>
        </Formik>
      </section>
    </ThemeProvider>
  );
};
