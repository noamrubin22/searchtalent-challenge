import { Typography, Button, Paper } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import TextFormField from "./TextFields/TextFormField";
import SelectFormField from "./TextFields/SelectFormField";
import axios from "axios";
import "./SearchDoctors.css";

const SearchDoctors = ({ setData, setHasSearched }) => {
  return (
    <Paper className="container__search">
      <Typography variant="h5">Search for your doctor</Typography>
      {/* I chose the formik library because I think it's very pleasant to use */}
      <Formik
        initialValues={{ city: "", facility: "", expertise: "" }}
        onSubmit={async (values) => {
          //  I think it's important to give the users the option to search without specifying an area of expertise
          let url;
          if (!values.expertise) {
            url = `https://recruit-staging.searchtalent.de/medical/get_doctors?city=${values.city}&facility=${values.facility}`;
          } else {
            url = `https://recruit-staging.searchtalent.de/medical/get_doctors?city=${values.city}&area_of_expertise=${values.expertise}&facility=${values.facility}`;
          }
          const res = await axios.get(url);
          setData(res.data.doctors);
          setHasSearched(true);
        }}
      >
        {() => (
          <Form>
            <Field name="city" label="City" component={TextFormField} />
            <Field name="facility" label="Facility" component={TextFormField} />
            <Field
              options={[
                { label: "-", value: "" },
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
            <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: "2rem" }}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default SearchDoctors;
