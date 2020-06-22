import React from "react";
import AddForm from "./index";

export default {
  component: AddForm,
  title: "Add Form"
};

export const Default = () => <AddForm />;
export const Error = () => <AddForm hasError={true} />;
