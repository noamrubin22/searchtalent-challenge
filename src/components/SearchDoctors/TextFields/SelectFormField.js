import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const SelectFormField = ({ field, form, label, options, ...props }) => {
  return (
    <FormControl fullWidth style={{ marginTop: "0.5rem" }}>
      <InputLabel>{label}</InputLabel>
      {/* explanation for the warning that occurs while clicking on select: https://stackoverflow.com/questions/61115871/finddomnode-error-on-react-material-ui-select-menu */}
      <Select fullWidth {...field} {...props}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFormField;
