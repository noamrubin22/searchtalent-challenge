import React, { useState } from "react";
import axios from "axios";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  TextField,
  MenuItem,
  Button,
} from "@material-ui/core";
import "./SearchForm.css";
import { useForm } from "react-hook-form";

const SearchForm = () => {
  const [expertise, setExpertise] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data, e);
    const res = axios.get(
      "https://recruit-staging.searchtalent.de/medical/get_doctors"
    );

    console.log(res.json);
  };
  const onError = (errors, e) => console.log(errors, e);

  const expertises = [
    "Allergy and Immunology",
    "Anesthesiology",
    "Colon and Rectal Surgery",
    "Dermatology",
    "Emergency Medicine",
  ];

  const handleChange = (event) => {
    setExpertise(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormGroup className="search-form">
        <FormControl margin="normal">
          <InputLabel htmlFor="city">City</InputLabel>
          <Input
            id="city"
            aria-describedby="my-helper-text"
            {...register("city")}
          />
        </FormControl>
        <FormControl margin="normal">
          <InputLabel htmlFor="facility">Facility</InputLabel>
          <Input
            id="facility"
            aria-describedby="my-helper-text"
            {...register("facility")}
          />
        </FormControl>
        {/* <FormControl margin="normal">
          <TextField
            id="outlined-select-expertise"
            select
            label="Field of expertise"
            value={expertise}
            onChange={handleChange}
            {...register("expertise")}
          >
            {expertises.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </FormControl> */}
        <FormControl margin="normal" size="small">
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            size="medium"
          >
            Search
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  );
};

export default SearchForm;
