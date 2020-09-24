// Render Prop

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Basic = () => (
  <div>
    <h1>Any place in your app!</h1>

    <Formik
      initialValues={{ text: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.text) {
          errors.text = "Required";
        } else if (values.text < 3) {
          errors.text = "City name too short";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));

          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="text" />
          <span style={{ color: "red", fontWeight: "bold" }}>
            <ErrorMessage name="text" component="div" />
          </span>
          <button type="submit" disabled={isSubmitting}>
            Search for weather
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;
