import "./App.css";
import "@fontsource/roboto";
import { Typography, Button } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import SearchForm from "./components/SearchForm/SearchForm";
import { Formik, Form, Field } from "formik";
import TextFormField from "./components/Form/TextFormField";
import SelectFormField from "./components/Form/SelectFormField";
import axios from "axios";

function App() {
  return (
    <Box className="App">
      <Paper className="container__search">
        <Typography variant="h5">Search for your doctor</Typography>
        <Formik
          initialValues={{ city: "", facility: "", expertise: "" }}
          onSubmit={async () => {
            const res = await axios.get(
              `https://recruit-staging.searchtalent.de/medical/get_doctors?city=Paris`
            );
            console.log(res.data);
          }}
        >
          {() => (
            <Form>
              <Field name="city" label="City" component={TextFormField} />
              <Field
                name="facility"
                label="Facility"
                component={TextFormField}
              />
              <Field
                options={[
                  {
                    label: "Allergy and Immunology",
                    value: "Allergy and Immunology",
                  },
                  { label: "Anesthesiology", value: "Anesthesiology" },
                  {
                    label: "Colon and Rectal Surgery",
                    value: "Colon and Rectal Surgery",
                  },
                  { label: "Dermatology", value: "Dermatology" },
                  { label: "Emergency Medicine", value: "Emergency Medicine" },
                ]}
                name="expertise"
                label="Expertise"
                component={SelectFormField}
              />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
}

export default App;
