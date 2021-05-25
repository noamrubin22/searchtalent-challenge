import React from "react";
import { TextField } from "@material-ui/core";

const TextFormField = ({ field, form, ...props }) => {
  return <TextField fullWidth margin="dense" {...field} {...props} />;
};

export default TextFormField;
